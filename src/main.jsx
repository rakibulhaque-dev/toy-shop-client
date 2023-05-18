import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import './index.css'
import AuthProvider from './Providers/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  ,
)
