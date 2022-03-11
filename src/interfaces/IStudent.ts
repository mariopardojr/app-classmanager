import { IRawNote } from '../services/interfaces/IRawNote';

export interface IStudent {
  _id: string;
  name: string;
  age: number;
  job: string;
  grade?: string;
  englishLevel: string;
  imageUrl: string;
  teacherId: string;
  notes?: IRawNote[];
}
