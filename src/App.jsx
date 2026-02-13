import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Connect from './components/Connect'
import GetApp from './components/GetApp'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import FAQ from './pages/FAQ'

const titles = {
  '/': 'Multi SMS Sender (MSS) - Send Bulk SMS Directly From Your Phone',
  '/privacy-policy': 'Privacy Policy - Multi SMS Sender',
  '/terms-of-service': 'Terms of Service - Multi SMS Sender',
  '/faq': 'FAQ - Multi SMS Sender',
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Connect />
      <GetApp />
    </>
  )
}

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titles[pathname] || titles['/']
  }, [pathname])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
