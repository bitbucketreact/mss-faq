import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga4'
import './index.css'
import App from './App.jsx'

// Initialize Google Analytics
// Measurement ID for Multi SMS Sender
ReactGA.initialize('G-78XN5CPKBP')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
