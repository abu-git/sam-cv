import Head from 'next/head'

import Navigation from '../components/Navigation'
import Landing from '../components/Landing'
import About from '../components/About'
import Education from '../components/Education'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Samuel Abu&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Landing />
      <About />
      <Education />
      
    </div>
  )
}
