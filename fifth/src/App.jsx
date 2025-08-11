import { useState } from 'react'

import Navbar from './Components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <h1>React router dom</h1>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
