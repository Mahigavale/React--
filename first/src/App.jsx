import Home from "./Components/Home"
import './App.css'
 import {Contactus} from "./Components/Contactus";
 import Careers from "./Components/Careers";
import { createContext, Fragment, useState } from "react";
// import { Aboutus } from "./Components/Careers";
// import { Aboutus2 } from "./Components/Careers";



function App() {
  

  const Profile={
    studentname:"ABC",
    studentemail:"ABC@gmail.com"
  }
  
  const profile2=[{
    id:12,
    name:"A"
  },{
    id:13,
    name:"B"
  }]

  let [teachers,setteachers]=useState(profile2);

  function updatetecher()
  {
    teachers.map((value,key)=>
    {
      if(value.id==12)
      {
        value.name="E"
      }
    })
      setteachers([...teachers]);
  }


  let[student, setstudent]=useState(Profile);


   function updateemail()
   {
    setstudent({...Profile, studentemail:"CDE@gmail.com"})
   }

   let names=["A","B","C","D"];

   let[people,setpeople]=useState(names);

   function addpeople()
   {
    setpeople([...people,"E"])
   }
   
   
   
  let [count,setcount]=useState(0); //count=0 setcount(count++)


  
   function Increament()
   {
    setcount(count+=count);
   }
   function Decreament()
   {
    if(count>=0)
    {
    setcount(count-=count);
    }

   }
  
    function Reset()
    {
      setcount(0);
    }
  
  const [color,setcolor]=useState("blue");
  console.log(color);
  
  function changecolorred()
  {
    setcolor("red");
  }

  function changecolortoyello()
  {
     setcolor("yellow");
  }
  

  return (<>

{/* <h1 style={{color:color}}> This is the React Library !</h1>
<button onClick={changecolorred}>click to change the color to red</button>
<button onClick={changecolortoyello}>change to yellow</button>
<h2>It is a JS based library!</h2>
<button  style={{color:"red"}} onClick={Increament}>Increament</button>&nbsp;&nbsp;
<button style={{color:"red"}}  onClick={Reset}>Reset</button>&nbsp;&nbsp;
<button style={{color:"pink"}} onClick={Decreament}>Decreament</button>

<h1>{count}</h1>
<h1>{student.studentname}</h1>
<h1>{student.studentemail}</h1>
<h1></h1>
<button onClick={updateemail}>changeemail</button>

{
  people.map((value,key)=>
  {
    return(<h1 key={key}>
      {value}
    </h1>)
  })
}
<button onClick={addpeople}>updatepeople</button>

{
  teachers.map((value,key)=>
  {

    return(<h1 key={key}>
      {value.id}
      {value.name}
    </h1>)
  })
}
<button onClick={updatetecher}>addteacher</button> */}

<Home></Home>

  </>)
}

export default App
