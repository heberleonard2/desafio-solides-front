import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'solides.token': token } = parseCookies()

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333'
      : process.env.NEXT_PUBLIC_HEROKU_API_ENDPOINT
})

if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`
}
