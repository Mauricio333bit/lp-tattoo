import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StudioProvider } from './context/StudioProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <StudioProvider>
      <App />
    </StudioProvider>
  </StrictMode>,
)
