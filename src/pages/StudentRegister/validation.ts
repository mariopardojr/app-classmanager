import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name field is required'),
  age: Yup.string().required('Age field is required'),
  job: Yup.string().required('Job field is required'),
  grade: Yup.string()
    .optional()
    .when('job', {
      is: (job: string) => job === 'Student',
      then: Yup.string().required('Grade field is requird'),
    }),
  englishLevel: Yup.string().required('English level field is required'),
});
