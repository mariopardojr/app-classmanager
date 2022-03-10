import Utils from '../../utils/utils';
import { api } from '../api';
import { Note, Student } from './types';

const getStudents = async (): Promise<Student[]> => {
  const { data } = await api.get<Student[]>('/students');
  return data;
};

const createStudent = async (student: Partial<Student>) => {
  await api.post('/students', {
    ...student,
    imageUrl: `http://lorempixel.com.br/100/100?${Utils.getRandomNumber()}`,
  });
};

const updateNotes = async (id: number, notes: Note[]) => {
  await api.patch(`/students/${id}`, { notes });
};

const StudentService = {
  getStudents,
  createStudent,
  updateNotes,
};

export default StudentService;
