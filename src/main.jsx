import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RoutesConfig } from './routes/config.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesConfig />
  </StrictMode>,
)
