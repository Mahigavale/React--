
import { Formik, useFormik } from "formik";
import { useState } from "react";
import validation from "./Validations";
function Form()
{


 let [data,setdata]=useState({

 });

   const formik=useFormik({

    initialValues:
    {
        email:"",
        mobile:"",
        city:"",
        pincode:""
    },
    onSubmit:(v)=>
    {
        console.log(v);
        
        console.log(v.email,+" " +v.city +" "+v.pincode);
        
        setdata(v);
    }
    ,
    validationSchema:validation
   })

    return(<>
     <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email"> Email</label>
        <input type="email"
               name="email"
               value={formik.values.email}
               onChange={formik.handleChange}
        ></input>
        {
            formik.touched.email && formik.errors.email &&(
                <div style={{color:"red"}}>{formik.errors.email}</div>
            )
        }

        <label htmlFor="mobile" >Mobile</label>
        <input
        type="text"
        name="mobile"
        value={formik.values.mobile}
        onChange={formik.handleChange}
        ></input>

        <label htmlFor="city">city</label>
        <input
          type="text"
          name="city"
          value={formik.values.city}
           onChange={formik.handleChange}
        ></input>

        <label htmlFor="pincode">Pincode</label>
        <input
         type="text"
         name="pincode"
         value={formik.values.pincode}
          onChange={formik.handleChange}
        ></input>


        <button type="submit" style={{backgroundColor:"yellow"}}>Register</button>
     </form>
    
    
    <h1>email:{data.email}</h1>
    
    </>)
}


export default Form;