import { Student } from '../StudentContext/types';

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  students: Student[];
  createdAt: Date;
}

export interface UserContextState {
  user: User;
  setUser: (user: User) => void;
  getUser: (id: string) => void;
}
