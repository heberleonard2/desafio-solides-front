import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'solides.token': token } = parseCookies()

export const api = axios.create({
  baseURL: process.env.API_ENDPOINT
})

if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`
}
