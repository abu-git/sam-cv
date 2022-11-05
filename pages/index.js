import Head from 'next/head'

import Navigation from '../components/Navigation'
import Landing from '../components/Landing'
import About from '../components/About'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Samuel Abu&apos;s Portfolio</title>
        <meta name="description" content="Portfolio Web app by Samuel Abu" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Landing />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
