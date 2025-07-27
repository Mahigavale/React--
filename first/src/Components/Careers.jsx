import { useContext } from "react";
import { cityconext,populationcontext,metrocontext } from "./Home";
function Careers()    //{city2,profile2}=employee; recieved=obj={city2,profile2}
{

    let usepops=useContext(populationcontext);
    let usemetro=useContext(metrocontext);
    let usecity=useContext(cityconext);

    return(
        <div>
            
           <h1>Using the usecontext component</h1>
         <h1> {usecity}{usemetro}{usepops}</h1>
        </div>
   )
}

export default Careers;

function Aboutus()
{

    return (<h1> This is the about us written in Careers.jsx.....</h1>)

}
export  {Aboutus};

function Aboutus2()
{

    return (<h1> This is the about us2 written in Careers.jsx.....</h1>)

}
export  {Aboutus2};