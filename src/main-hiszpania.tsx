import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hiszpania from './pages/hiszpania'
import './styles/theme.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hiszpania />
  </StrictMode>,
)
