export interface Student {
  _id: string;
  name: string;
  imageUrl: string;
}
export interface StudentContextState {
  students: Student[];
  setStudents: (students: Student[]) => void;
  refreshStudents: () => void;
}
