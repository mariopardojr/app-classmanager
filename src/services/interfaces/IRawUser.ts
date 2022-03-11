import { IRawStudent } from './IRawStudent';

export interface IRawUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  students: IRawStudent[];
  createdAt: Date;
}
