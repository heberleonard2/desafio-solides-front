import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import { api } from '../services/api'
import { format, parseISO } from 'date-fns'
import { toast } from 'react-toastify'

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
  setReports: Dispatch<SetStateAction<Report[]>>
  selectedDateAsText: string
  timeReportsWithFormatDate: Report[]
  deleteReport: (id: string) => Promise<void>
  createReport: (data: ReportInput) => Promise<void>
}

const TimeReportContext = createContext<TimeReportContextData>(
  {} as TimeReportContextData
)

export function TimeReportProvider({ children }: TimeReportProviderProps) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [reports, setReports] = useState<Report[]>([])

  const createReport = useCallback(
    async ({ description }: ReportInput) => {
      try {
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
      } catch (err) {
        toast.error('There was an error, please try again')
      }
    },
    [reports]
  )

  const deleteReport = useCallback(
    async (id: string) => {
      try {
        await api.delete(`/worktime/${id}`)
        const report = reports.filter(report => report._id !== id)
        setReports(report)
      } catch (err) {
        toast.error('There was an error, please try again')
      }
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
        setReports,
        deleteReport,
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
