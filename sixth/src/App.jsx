import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formhandling from './Formexample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formhandling></Formhandling>
    </>
  )
}

export default App
