import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import './styles/main.scss'
import ChooseProfile from './routes/ChooseProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register-choose-profile',
        element: <ChooseProfile />
      },
      {
        path: '/login',
        element: <SignIn/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
