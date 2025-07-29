
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fetchdata } from './Components/Hook2'
import Usefetchcustom from './Components/Usefetchcustom'
function App() {

  let data=Usefetchcustom("https://dummyjson.com/users");
  
  return (
    <>
      <h1>
        The app.jsx component in action.
      </h1>
      <Fetchdata></Fetchdata>
      <h1>*************************</h1>
       {
        data.map((comm)=>{

          return(<ol key={comm.id}>
          <li>
            {comm.firstName}
          </li>
          <li>
            {comm.lastName}
          </li>

          </ol>)
        })
       }
      
    </>
  )
}

export default App
