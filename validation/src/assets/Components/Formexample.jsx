import { Formik, useFormik } from "formik";
import validateschema from "./Validate";
function Formexample()
{
   const formik=useFormik({
  initialValues:
  {
   email:"",
   city:"",
   pin:"",
   mobile:""
  },
  onSubmit:(val)=>
  {
    console.log(val);
    
  },
   validationSchema:validateschema
   })

    return(<>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email" >Email</label>
      <input  type="email"  value={formik.values.email} name="email"
      onChange={formik.handleChange}
      />

{
   formik.touched.pin && formik.errors.pin &&
   (<div>
    <h1 style={{color:"red"}}>{formik.errors.pin}</h1>
   </div>)

}

 <label htmlFor="pin" >Pin</label>
      <input  type="text"  value={formik.values.pin} name="pin"
      onChange={formik.handleChange}
      />
       <label htmlFor="city" >City</label>
      <input  type="text"  value={formik.values.city} name="city"
      onChange={formik.handleChange}
      />

      {
        formik.touched.mobile && formik.errors.mobile &&(<div>
            <h4 style={{color:"red"}}>{formik.errors.mobile}</h4>
        </div>)
      }
       <label htmlFor="mobile" >Mobile</label>
      <input  type="text"  value={formik.values.mobile} name="mobile"
      onChange={formik.handleChange}
      />
      <button type="submit" style={{backgroundColor:"green"}}>Submit</button>

    </form>
    </>)

}


export default Formexample;