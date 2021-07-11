import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'solides.token': token } = parseCookies()

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'localhost:3333'
      : process.env.HEROKU_API_ENDPOINT
})

if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`
}
