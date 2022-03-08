export type Student = {
  id: string;
  name: string;
  imageUrl: string;
};

export interface User {
  id?: string | number;
  user: string;
  email: string;
  role: string;
  students: Student[];
}
