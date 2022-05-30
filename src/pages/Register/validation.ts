import * as Yup from 'yup';

export const registerValidation = Yup.object().shape({
  name: Yup.string().required('Name is required, seu desgraçado!'),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});
