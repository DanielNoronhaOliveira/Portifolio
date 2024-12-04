import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {router} from './routes'
import './global.css'
//import { Home, Sobre } from './container'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> { /* serve para pegar todas as rotas */}
  </StrictMode>,
)
