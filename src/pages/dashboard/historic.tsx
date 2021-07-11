import { useCallback, useEffect, useMemo, useState } from 'react'
import { format, parseISO } from 'date-fns'
import DayPicker, { DayModifiers } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
import {
  Container,
  Calendar,
  Hours,
  Entrance,
  Exit
} from '../../styles/pages/dashboard/historic'
import { ImArrowDownLeft, ImArrowUpRight } from 'react-icons/im'

interface WorkPoint {
  _id: string
  type: 'entrance' | 'exit'
  description: string
  createdAt: string
}

export default function Historic() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [workPoint, setWorkPoint] = useState<WorkPoint[]>([])

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day)
    }
  }, [])

  useEffect(() => {
    api
      .get(`/worktime`, {
        params: {
          date: selectedDate.toISOString()
        }
      })
      .then(response => setWorkPoint(response.data))
  }, [selectedDate])

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "MMMM dd',' yyyy")
  }, [selectedDate])

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
        <Calendar>
          <DayPicker
            modifiers={{
              available: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] }
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
          />
        </Calendar>
        <Hours>
          <h1>{selectedDateAsText}</h1>
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
    </>
  )
}
