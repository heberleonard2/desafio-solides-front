import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { api } from '../services/api'
import { format, parseISO } from 'date-fns'

interface TimeReportProviderProps {
  children: ReactNode
}

interface Report {
  _id: string
  type: 'entrance' | 'exit'
  description: string
  createdAt: string
}

type ReportInput = Omit<Report, '_id' | 'createdAt' | 'type'>

interface TimeReportContextData {
  selectedDate: Date
  setSelectedDate: Dispatch<SetStateAction<Date>>
  selectedDateAsText: string
  timeReportsWithFormatDate: Report[]
  createReport: (data: ReportInput) => Promise<void>
}

const TimeReportContext = createContext<TimeReportContextData>(
  {} as TimeReportContextData
)

export function TimeReportProvider({ children }: TimeReportProviderProps) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [reports, setReports] = useState<Report[]>([])

  useEffect(() => {
    api
      .get(`/worktime`, {
        params: {
          date: selectedDate.toISOString()
        }
      })
      .then(response => setReports(response.data))
  }, [selectedDate])

  const createReport = useCallback(
    async ({ description }: ReportInput) => {
      const response = await api.post('/worktime', {
        description
      })
      const { _id, type, createdAt } = response.data
      setReports([
        ...reports,
        {
          _id,
          type,
          description,
          createdAt
        }
      ])
    },
    [reports]
  )

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "MMMM dd',' yyyy")
  }, [selectedDate])

  const timeReportsWithFormatDate = useMemo(() => {
    return reports.map(report => {
      const parsedDate = format(parseISO(report.createdAt), 'HH:mm:ss')
      return {
        ...report,
        createdAt: parsedDate
      }
    })
  }, [reports])

  return (
    <TimeReportContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedDateAsText,
        timeReportsWithFormatDate,
        createReport
      }}
    >
      {children}
    </TimeReportContext.Provider>
  )
}

export function useTimeReport(): TimeReportContextData {
  const context = useContext(TimeReportContext)
  return context
}
