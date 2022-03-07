import { Student } from '../../services/StudentService/types';

export interface StudentContextState {
  students: Student[];
  getStudents: () => void;
}
