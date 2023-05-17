import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
    
  )
}

export default MyApp
