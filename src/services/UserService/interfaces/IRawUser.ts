import { IRawStudent } from './IRawStudent';

export interface IRawUser {
  id: string;
  name: string;
  email: string;
  role: string;
  students: IRawStudent[];
  createdAt: Date;
}
