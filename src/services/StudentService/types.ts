export type Note = {
  _id?: string;
  note: string;
  title: string;
};

export interface StudentRegisterData {
  name: string;
  age: string;
  job: string;
  grade: string;
  englishLevel: string;
  imageUrl?: string;
  teacherId?: string;
}

export interface StudentResponseData extends StudentRegisterData {
  _id: string;
}

export interface StudentResponse {
  status: number;
  student: StudentResponseData;
}

export interface StudentRegisterResponse extends StudentRegisterData {
  _id: string;
  notes?: Note[];
}
