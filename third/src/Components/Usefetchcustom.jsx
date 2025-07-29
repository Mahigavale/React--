import { useEffect, useState } from "react";


function Usefetchcustom(url)
{
  let[data,setdata]=useState([]);



  useEffect(()=>{
    fetch(url).then((response)=>
    {
        return response.json();
    }).then((v)=>
    {
        setdata(v.users);
        console.log("custom hook");
        
        console.log(v.users);
        
    }).catch((e)=>
    {
        console.log(e);
        
    })
  },[])



  return data;

}

export default Usefetchcustom;