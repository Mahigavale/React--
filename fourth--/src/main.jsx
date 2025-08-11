import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Pages/Home.jsx'
import Aboutus from './Components/Pages/Aboutus.jsx'
import Contactus from './Components/Pages/Contactus.jsx'
import Careers from './Components/Pages/Careers.jsx'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'


const route=createBrowserRouter(createRoutesFromElements(
  <Route element={<App></App>} path='/'>
    <Route element={<Home></Home>} path='/home'></Route>
    <Route element={<Aboutus></Aboutus>}path='/aboutus'></Route>
    <Route element={<Contactus></Contactus>} path='/contactus'></Route>
    <Route element={<Careers></Careers>} path='/careers'></Route>
  </Route>
))

createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={route}>
      <App />
  </RouterProvider>
  
 
)
