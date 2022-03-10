import { Student } from '../StudentContext/types';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  students: Student[];
  createdAt: Date;
}

export interface UserContextState {
  user: User | undefined;
  setUser: (user: User) => void;
  getUser: (id: string) => void;
}
