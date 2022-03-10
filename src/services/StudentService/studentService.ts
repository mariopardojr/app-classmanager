import { api } from '../api';
import { Note, StudentRegister } from './types';

const createStudent = async (student: StudentRegister): Promise<StudentRegister> => {
  try {
    const { data } = await api.post<StudentRegister>('/students', student);
    return data;
  } catch (error) {
    // @ts-ignore
    return ResultErrorFactory.create(error);
  }
};

const updateNotes = async (id: number, notes: Note[]) => {
  await api.patch(`/students/${id}`, { notes });
};

const StudentService = {
  createStudent,
  updateNotes,
};

export default StudentService;
