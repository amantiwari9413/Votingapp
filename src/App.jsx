import { useState , useContext } from 'react'
import { userContext } from './Context'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewUser from './NewUser'
import Vote from './Vote'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
    <Outlet/>
  </>
  )
}

export default App
