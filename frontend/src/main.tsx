import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import './styles/main.scss'
import ChooseProfile from './routes/ChooseProfile';
import RegisterDriver from './routes/RegisterDriver';

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
        path: '/register-driver',
        element: <RegisterDriver />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
