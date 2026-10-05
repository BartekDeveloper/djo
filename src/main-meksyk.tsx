import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Meksyk from './pages/meksyk'
import './styles/theme.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Meksyk />
  </StrictMode>,
)
