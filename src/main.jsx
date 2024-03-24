import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './components/Root/Root'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Jobs from './components/Jobs/Jobs'
import Error from './components/Error/Error'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path:'/',
        element: <Home/>,
      },
      {
        path: '/jobs',
        element: <Jobs/>,
      },
      {
        path: '/blog',
        element: <Blog/>,
      },
    ]
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
