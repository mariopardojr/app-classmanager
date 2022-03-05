import { api } from './api';
import { Student } from './types';

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 1000);
};

const getStudents = async (): Promise<Student[]> => {
  const { data } = await api.get<Student[]>('/students');
  return data;
};

const createStudent = async (student: Partial<Student>) => {
  await api.post('/students', {
    ...student,
    imageUrl: `http://lorempixel.com.br/100/100?${getRandomNumber()}`,
  });
};

const StudentService = {
  getStudents,
  createStudent,
};

export default StudentService;
