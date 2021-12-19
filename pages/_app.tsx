import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../public/fonts/fonts.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    }
  }
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
