import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import VideoSection from './components/VideoSection'
import ParallaxSection from './components/ParallaxSection'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import About from './components/About'
import BookingForm from './components/BookingForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import MobileBookingCTA from './components/MobileBookingCTA'

function App() {
  useEffect(() => {
    // Load external scripts
    const loadScripts = () => {
      // LightGallery
      const lgScript = document.createElement('script')
      lgScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/lightgallery.min.js'
      document.body.appendChild(lgScript)

      // Juxtapose
      const jxScript = document.createElement('script')
      jxScript.src = 'https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js'
      document.body.appendChild(jxScript)

      return () => {
        document.body.removeChild(lgScript)
        document.body.removeChild(jxScript)
      }
    }

    loadScripts()
  }, [])

  return (
    <div className="bg-[#121212] text-[#f8f9fa] font-['Outfit']">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <BookingForm />
      <VideoSection />
      <Pricing />
      <ParallaxSection />
      <Gallery />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <MobileBookingCTA />
    </div>
  )
}

export default App