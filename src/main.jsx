import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'// 1. Adding import here
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* 2. Wrapping BrowserRouter around App */}
   <BrowserRouter>
     <App />
   </BrowserRouter>
  </StrictMode>,
)
