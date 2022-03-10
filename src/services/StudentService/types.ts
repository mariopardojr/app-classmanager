export type Note = {
  id?: string;
  note: string;
  title: string;
};

export interface StudentRegister {
  name: string;
  age: string;
  job: string;
  grade: string;
  englishLevel: string;
  imageUrl?: string;
  notes: Note[];
  teacherId: string;
}
