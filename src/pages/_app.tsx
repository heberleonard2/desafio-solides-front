import NextNprogress from 'nextjs-progressbar'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { progressConfig } from '../utils/progressBar'
import { toastConfig } from '../utils/toast'
import { AuthProvider } from '../hooks/useAuth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />

        <GlobalStyle />

        <NextNprogress {...progressConfig} />
        <ToastContainer {...toastConfig} />
      </AuthProvider>
    </ThemeProvider>
  )
}
export default MyApp
