import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InformationContex from './InformationContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InformationContex>
    <App />
    </InformationContex>
  </StrictMode>,
)
