
import { createContext } from "react";
import { Contactus } from "./Contactus";
import Careers from "./Careers";




let cityconext=createContext("This is the default value");
let populationcontext=createContext(null);
let metrocontext=createContext();

function Home()   //props=>profile=>"HI a am peter..."
{

     //let cityname="Pune";
    console.log("hii from Home page...");

   

    return (
        <div>
            <h1> This is the Home page....</h1>
            <h2> I am using the Context here....</h2>


              <cityconext.Provider value="Latur">
                <populationcontext.Provider value="2 crore">
                    <metrocontext.Provider  value="MahaMetro">
                         <Contactus ></Contactus>
                         <Careers></Careers>
                    </metrocontext.Provider>
                </populationcontext.Provider>
              </cityconext.Provider>
             
          
        

        </div>
    )
}


export default Home

export {cityconext,metrocontext,populationcontext}

