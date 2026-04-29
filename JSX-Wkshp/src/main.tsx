import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ActThree from './ActivityThree.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActThree />
  </StrictMode>,
)
