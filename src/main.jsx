import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// react router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Menu</h1>,
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
        element: <h1>Game</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
