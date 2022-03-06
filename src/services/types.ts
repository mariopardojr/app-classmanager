export type Note = {
  id: string;
  note: string;
  title: string;
};

export interface Student {
  id: number;
  name: string;
  age: string;
  job: string;
  grade: string;
  englishLevel: string;
  imageUrl: string;
  notes: Note[];
}
