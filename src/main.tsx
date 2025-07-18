import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
import App from './App.tsx'
import AuthContextProvider from './Contexts/AuthContext/AuthContext.tsx'
import CartContextProvider from './Contexts/CartContext/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
