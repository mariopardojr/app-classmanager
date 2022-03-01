import { api } from './api'
import { Student } from './types';


export const getStudents = async (): Promise<Student[]> => {
  const { data } = await api.get<Student[]>('/students');
  return data;
}