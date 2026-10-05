import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gry from './pages/gry'
import './styles/theme.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Gry />
  </StrictMode>,
)
