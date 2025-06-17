import Head from 'next/head'

import Navigation from '../components/Navigation'
import Landing from '../components/Landing'
import About from '../components/About'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Samuel Abu&apos;s Portfolio</title>
        <meta name="description" content="A digital CV and portfolio of Samuel Abu" />
        <meta property='og:title' content="Developer and Creative" />
        <meta property='og:description' content="A digital CV and portfolio of Samuel Abu" />
        <meta  property='og:image' itemProp="image" content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1667741571/meta_fincj7.jpg'/>
        <meta  property='og:image:secure_url' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1667741571/meta_fincj7.jpg'/>
        <meta property="og:url" content="https://sam-cv.vercel.app/" />
        <meta property="og:image:width" content="2024" />
        <meta property="og:image:height" content="1012" />
        <meta property="og:type" content="website" />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content="Developer and Creative" />
        <meta property='twitter:image' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1667741571/meta_fincj7.jpg' />
        <meta name="twitter:creator" content="@reachmhp"/>
        <meta name="twitter:creator" content="@reachmhp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Landing />
      <About />
      
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <Whatsapp />
    </div>
  )
}
