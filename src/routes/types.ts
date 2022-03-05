import { Student } from '../services/types';

type StudentDetailsParams = {
  student: Student;
};

export type StackRoutes = {
  Home: undefined;
  'Student Register': undefined;
  'Student Details': StudentDetailsParams;
};
