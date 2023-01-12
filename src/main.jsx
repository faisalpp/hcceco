import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from '../context/GlobalContext'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
    <AppProvider>
     <BrowserRouter>
      <App />
     </BrowserRouter>
    </AppProvider>
   </HelmetProvider> 
  </React.StrictMode>,
)
