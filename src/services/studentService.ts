import { api } from './api';
import { Student } from './types';

const getStudents = async (): Promise<Student[]> => {
  const { data } = await api.get<Student[]>('/students');
  return data;
};

const createStudent = async (student: Partial<Student>) => {
  await api.post('/students', {
    ...student,
    imageUrl: 'http://lorempixel.com.br/100/100?',
  });
};

const StudentService = {
  getStudents,
  createStudent,
};

export default StudentService;
