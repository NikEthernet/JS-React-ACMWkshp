import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ActFour from './ActivityFour.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActFour />
  </StrictMode>,
)
