import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  date: Yup.string().required('Date is required'),
  startAt: Yup.string().required('Start date is required'),
  endAt: Yup.string().required('End date is required'),
});
