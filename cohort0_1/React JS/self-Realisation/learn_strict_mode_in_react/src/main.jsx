import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,

  // so If we are using the strict mode then it will run the hooks like useEffect two - three times in order to check the DOM changes.
  
)
