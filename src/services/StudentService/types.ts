import { StudentRegisterFormValues } from '../../pages/StudentRegister/types';
import { IRawStudent } from '../interfaces/IRawStudent';

export interface StudentResponse {
  status: number;
  student: IRawStudent;
  message?: string;
}

export interface StudentValuesRegister extends StudentRegisterFormValues {
  teacherId: string;
}
