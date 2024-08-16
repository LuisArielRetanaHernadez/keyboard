import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// react router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Layouts
import Menu from './layouts/Menu/Menu'
import Game from './pages/Game/Game.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
    children: [
      {
        path: '/login',
        element: <h1>Login</h1>
      },
      {
        path: '/register',
        element: <h1>Register</h1>
      },
      {
        path: '/game',
        element: <Game />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
