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
    <>
      <Navigation />
      <Landing />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  )
}