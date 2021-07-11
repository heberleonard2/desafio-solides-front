import { GetServerSideProps } from 'next'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { parseCookies } from 'nookies'
import Modal from 'react-modal'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuth } from '../../hooks/useAuth'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import {
  Container,
  RegisterContainer,
  ReportsContainer,
  ButtonReport,
  NoReports,
  ModalForm
} from '../../styles/pages/dashboard/home'
import { Entrance, Exit } from '../../styles/pages/dashboard/historic'
import { ImArrowDownLeft, ImArrowUpRight } from 'react-icons/im'
import { useTimeReport } from '../../hooks/useTimeReport'
import { AiOutlineClockCircle, AiFillDelete } from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs'

import { api } from '../../services/api'

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
    selectedDate,
    setSelectedDate,
    setReports,
    deleteReport,
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

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(createReportFormSchema)
  })

  const errors = formState.errors

  useEffect(() => {
    setSelectedDate(new Date())
  }, [setSelectedDate])

  useEffect(() => {
    api
      .get(`/worktime`, {
        params: {
          date: new Date().toISOString()
        }
      })
      .then(response => setReports(response.data))
  }, [selectedDate, setReports])

  const handleSubmitReport: SubmitHandler<ReportInput> = async ({
    description
  }) => {
    createReport({ description })
    handleCloseReportModal()
    reset()
  }

  function handleDeleteReport(id: string) {
    deleteReport(id)
  }

  const lastIndexTimeReports = useMemo(() => {
    return timeReportsWithFormatDate[timeReportsWithFormatDate.length - 1]
  }, [timeReportsWithFormatDate])

  return (
    <>
      <Header />
      <Container>
        <RegisterContainer>
          <div>
            <h1>Hi, {user?.name}</h1>
            <p>{selectedDateAsText}</p>
          </div>
          <div>
            {timeReportsWithFormatDate.length === 0 ? (
              <ButtonReport
                onClick={() => handleSubmitReport({ description: 'Check-in' })}
              >
                <AiOutlineClockCircle />
                Check-in
              </ButtonReport>
            ) : lastIndexTimeReports.type === 'exit' ? (
              <ButtonReport
                onClick={() =>
                  handleSubmitReport({ description: 'Back to work' })
                }
                disabled={lastIndexTimeReports.description === 'Checkout'}
              >
                {lastIndexTimeReports.description === 'Checkout' ? (
                  <>
                    <BsCheckCircle /> <span>End of work</span>
                  </>
                ) : (
                  <>
                    <ImArrowDownLeft /> <span>Back to work</span>
                  </>
                )}
              </ButtonReport>
            ) : (
              <>
                <ButtonReport onClick={handleOpenReportModal}>
                  <AiOutlineClockCircle />
                  Take a break
                </ButtonReport>
                <ButtonReport
                  onClick={() =>
                    handleSubmitReport({ description: 'Checkout' })
                  }
                >
                  <ImArrowDownLeft />
                  Checkout
                </ButtonReport>
              </>
            )}
          </div>
        </RegisterContainer>

        <ReportsContainer>
          {timeReportsWithFormatDate.length > 0 ? (
            timeReportsWithFormatDate.map((report, index, array) => (
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
                {array.length - 1 === index && (
                  <button onClick={() => handleDeleteReport(report._id)}>
                    <AiFillDelete />
                  </button>
                )}
              </div>
            ))
          ) : (
            <NoReports>
              <img src="images/no-task.png" alt="no-task" />
              <h1>Check in to get started</h1>
            </NoReports>
          )}
        </ReportsContainer>
      </Container>
      <Modal
        closeTimeoutMS={200}
        isOpen={isReportModalOpen}
        onRequestClose={handleCloseReportModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <ModalForm onSubmit={handleSubmit(handleSubmitReport)}>
          <h1>Take a break</h1>
          <Input
            type="text"
            placeholder="Describe the reason"
            label="Description"
            error={errors.description}
            {...register('description')}
          />
          <Button type="submit" isLoading={formState.isSubmitting}>
            Register
          </Button>
        </ModalForm>
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
