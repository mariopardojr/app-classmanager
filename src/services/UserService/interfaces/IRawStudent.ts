type Note = {
  _id: string;
  note: string;
  studentId: string;
};

export interface IRawStudent {
  _id: string;
  name: string;
  age: number;
  job: string;
  grade?: string;
  teacherId: string;
  notes?: Note[];
  imageUrl: string;
}
