
import * as Yup from "yup" 

const validateschema=Yup.object().shape(
    {
        email:Yup.string().email().required("Please provide the email...."),
        city:Yup.string().required("Please provde the city"),
        mobile:Yup.string().max(10,"Invalid").min(10,"Invalid").required("Number is mandatory"),
        pin:Yup.string().min(6,"invalid").max(6,"invalid").required("Provide pincode")
    }
)

export default validateschema;