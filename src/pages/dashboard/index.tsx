import { GetServerSideProps } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { useAuth } from '../../hooks/useAuth'
import Modal from 'react-modal'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import {
  Container,
  RegisterContainer,
  ReportsContainer,
  ButtonReport
} from '../../styles/pages/dashboard/home'
import { Entrance, Exit } from '../../styles/pages/dashboard/historic'
import { ImArrowDownLeft, ImArrowUpRight } from 'react-icons/im'
import { useTimeReport } from '../../hooks/useTimeReport'
import { AiOutlineClockCircle } from 'react-icons/ai'

type ReportInput = {
  description: string
}

Modal.setAppElement('#__next')

const createReportFormSchema = yup.object().shape({
  description: yup.string().required('Description is required')
})

export default function Dashboard() {
  const { user } = useAuth()
  const {
    setSelectedDate,
    selectedDateAsText,
    timeReportsWithFormatDate,
    createReport
  } = useTimeReport()
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)

  const handleOpenReportModal = useCallback(() => {
    setIsReportModalOpen(true)
  }, [])

  const handleCloseReportModal = useCallback(() => {
    setIsReportModalOpen(false)
  }, [])

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createReportFormSchema)
  })

  const errors = formState.errors

  useEffect(() => {
    setSelectedDate(new Date())
  }, [setSelectedDate])

  const handleSubmitReport: SubmitHandler<ReportInput> = async ({
    description
  }) => {
    createReport({ description })
    handleCloseReportModal()
  }

  return (
    <>
      <Header />
      <Container>
        <RegisterContainer>
          <div>
            <h1>Hi, {user?.name}</h1>
            <p>{selectedDateAsText}</p>
          </div>
          <ButtonReport onClick={handleOpenReportModal}>
            <AiOutlineClockCircle />
            Register Hour
          </ButtonReport>
        </RegisterContainer>

        <ReportsContainer>
          {timeReportsWithFormatDate.map(report => (
            <div key={report._id}>
              {report.type === 'entrance' ? (
                <Entrance>
                  <ImArrowDownLeft />
                </Entrance>
              ) : (
                <Exit>
                  <ImArrowUpRight />
                </Exit>
              )}
              <section>
                <h3>{report.createdAt}</h3>
                <p>{report.description}</p>
              </section>
            </div>
          ))}
        </ReportsContainer>
      </Container>
      <Modal
        closeTimeoutMS={200}
        isOpen={isReportModalOpen}
        onRequestClose={handleCloseReportModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <form onSubmit={handleSubmit(handleSubmitReport)}>
          <Input
            type="text"
            placeholder="description"
            label="Description"
            error={errors.description}
            {...register('description')}
          />
          <Button type="submit" isLoading={formState.isSubmitting}>
            Submit
          </Button>
        </form>
      </Modal>
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
