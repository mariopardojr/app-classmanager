import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  note: Yup.string().required('Note is required').max(259, 'Max length is 259 characters'),
});
