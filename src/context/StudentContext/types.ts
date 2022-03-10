export interface Student {
  studentId: string;
  name: string;
  imageUrl: string;
}
export interface StudentContextState {
  students: Student[];
  setStudents: (students: Student[]) => void;
}
