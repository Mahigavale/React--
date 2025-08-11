import * as Yup from 'yup';

const validation=Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobile: Yup.string().min(10,"Mobile must be 10 digits").required(),
  city: Yup.string().min(6, 'Password must be at least 6 characters').required(),
});

export default validation;