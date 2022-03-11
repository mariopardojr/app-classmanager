import { IRawNote } from './IRawNote';

export interface IRawStudent {
  _id: string;
  name: string;
  age: number;
  job: string;
  grade?: string;
  englishLevel: string;
  teacherId: string;
  notes?: IRawNote[];
  imageUrl: string;
}
