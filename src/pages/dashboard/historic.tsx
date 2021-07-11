import { useCallback } from 'react'
import DayPicker, { DayModifiers } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { Header } from '../../components/Header'
import {
  Container,
  Calendar,
  ReportContainer,
  Entrance,
  Exit
} from '../../styles/pages/dashboard/historic'
import { ImArrowDownLeft, ImArrowUpRight } from 'react-icons/im'
import { useTimeReport } from '../../hooks/useTimeReport'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

export default function Historic() {
  const {
    selectedDate,
    setSelectedDate,
    selectedDateAsText,
    timeReportsWithFormatDate
  } = useTimeReport()

  const handleDateChange = useCallback(
    (day: Date, modifiers: DayModifiers) => {
      if (modifiers.available) {
        setSelectedDate(day)
      }
    },
    [setSelectedDate]
  )

  return (
    <>
      <Header />
      <Container>
        <Calendar>
          <DayPicker
            modifiers={{
              available: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] }
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
          />
        </Calendar>
        <ReportContainer>
          <h1>{selectedDateAsText}</h1>
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
        </ReportContainer>
      </Container>
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
