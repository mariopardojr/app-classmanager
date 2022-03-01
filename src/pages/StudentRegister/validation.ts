import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  age: Yup.string().required('This field is required'),
  job: Yup.string().required('This field is required'),
  grade: Yup.string().required('This field is required'),
  englishLevel: Yup.string().required('This field is required'),
})