export type Note = {
  _id?: string;
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
  teacherId?: string;
}

export interface StudentRegisterResponse extends StudentRegister {
  _id: string;
  notes?: Note[];
}
