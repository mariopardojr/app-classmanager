import { Student } from '../services/StudentService/types';
import { IRawStudent } from '../services/UserService/interfaces/IRawStudent';

type StudentDetailsParams = {
  student: IRawStudent;
};

export type StackRoutes = {
  Home: undefined;
  Login: undefined;
  'Student Register': undefined;
  'Student Details': StudentDetailsParams;
};
