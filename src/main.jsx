import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context  from './Context.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import NewUser from './NewUser.jsx'
import Vote from './Vote.jsx'
const router = createBrowserRouter([
  {
    path:"",
    element:<App/>
  },
  {
    path:"/newuser",
    element:<NewUser/>
  },
  {
    path:"/vote",
    element:<Vote/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router} />
    </Context>
    
  </React.StrictMode>,
)
