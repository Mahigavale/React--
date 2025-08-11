import { useFormik } from "formik";
function Formhandling()
{


    const  formik=useFormik(
        {
            initialValues:
            {
               email:"",
               password:""    
            },
            onSubmit:(values)=>
            {
                console.log(values);
                
            }
        }
    )


    return(<>
    
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">email</label>
      <input
       type="email"
       value={formik.values.email}
       name="email"
       onChange={formik.handleChange}
      ></input>
    
    <button type="submit" style={{backgroundColor:"red"}}> Button</button>
        </form>
  
    </>)
}


export default Formhandling;