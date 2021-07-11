import { GetServerSideProps } from 'next'
import { useEffect, useMemo, useState } from 'react'
import { parseCookies } from 'nookies'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import {
  Container,
  RegisterContainer,
  ReportsContainer
} from '../../styles/pages/dashboard/home'
import { Entrance, Exit, Hours } from '../../styles/pages/dashboard/historic'
import { ImArrowDownLeft, ImArrowUpRight } from 'react-icons/im'
import { format, parseISO } from 'date-fns'
interface WorkPoint {
  _id: string
  type: 'entrance' | 'exit'
  description: string
  createdAt: string
}
interface Point {
  description: string
}

export default function Dashboard() {
  const { user } = useAuth()
  const { register, handleSubmit, formState } = useForm({})

  const [workPoint, setWorkPoint] = useState<WorkPoint[]>([])

  const errors = formState.errors

  useEffect(() => {
    api
      .get(`/worktime`, {
        params: {
          date: new Date().toISOString()
        }
      })
      .then(response => setWorkPoint(response.data))
  }, [])

  const handleSubmitPoint: SubmitHandler<Point> = async ({ description }) => {
    api
      .post('/worktime', {
        description
      })
      .then(response => setWorkPoint([...workPoint, response.data]))
  }

  const selectedDateAsText = useMemo(() => {
    return format(new Date(), "MMMM dd',' yyyy")
  }, [])

  const workPointWithFormatDate = useMemo(() => {
    return workPoint.map(point => {
      const parsedDate = format(parseISO(point.createdAt), 'HH:mm:ss')
      return {
        ...point,
        createdAt: parsedDate
      }
    })
  }, [workPoint])

  return (
    <>
      <Header />
      <Container>
        <RegisterContainer>
          <div>
            <h1>Olá, {user?.name}</h1>
            <p>{selectedDateAsText}</p>
          </div>
          <button>Fazer checkin</button>
        </RegisterContainer>

        <Hours>
          <h1></h1>
          {workPointWithFormatDate.map(point => (
            <div key={point._id}>
              {point.type === 'entrance' ? (
                <Entrance>
                  <ImArrowDownLeft />
                </Entrance>
              ) : (
                <Exit>
                  <ImArrowUpRight />
                </Exit>
              )}
              <section>
                <h3>{point.createdAt}</h3>
                <p>{point.description}</p>
              </section>
            </div>
          ))}
        </Hours>
      </Container>
      {/* <form onSubmit={handleSubmit(handleSubmitPoint)}>
            <Input
              type="tyext"
              placeholder="description"
              label="Description"
              error={errors.description}
              {...register('description')}
            />
            <Button type="submit" isLoading={formState.isSubmitting}>
              Submit
            </Button>
          </form> */}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'solides.token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
