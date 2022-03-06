import { api } from '../api';
import { Note, Student } from './types';

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

const addNote = async (id: number, notes: Note[]) => {
  await api.patch(`/students/${id}`, { notes });
};

const StudentService = {
  getStudents,
  createStudent,
  addNote,
};

export default StudentService;
