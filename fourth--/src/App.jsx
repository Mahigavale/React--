import { Outlet } from "react-router-dom"
import Navbar from "./Components/Nabvar"

function App() {
  

  return (
    <>
    <button className="btn btn-primary">Test Bootstrap Button</button>
    <Navbar></Navbar>
    <Outlet></Outlet>
    
   
    </>
  )
}

export default App
