import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Aboutus from './Components/Aboutus.jsx'
import Contactus from './Components/Contactus.jsx'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route,Router } from 'react-router-dom'


const marg=createBrowserRouter(createRoutesFromElements(


  <Route element={<App/>} path='/'>
  <Route element={<Home/>} path='/home'></Route>
  <Route element={<Aboutus />} path='/aboutus'></Route>
  <Route element={<Contactus />} path='/contactus'></Route>
  </Route>
))


createRoot(document.getElementById('root')).render(
 <RouterProvider router={marg}>
    <App />
    </RouterProvider>

)
