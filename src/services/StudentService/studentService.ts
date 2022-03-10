import { ResultErrorFactory } from '../../contracts/result/result-error-factory';
import { api } from '../api';
import { Note, StudentRegister, StudentRegisterResponse } from './types';

const createStudent = async (student: StudentRegister): Promise<StudentRegisterResponse> => {
  console.log('service req.body =>', student);
  const { data } = await api.post<StudentRegisterResponse>('/student/register', student);
  console.log('Student service =>', data);
  return data;
};

const getStudentById = async (studentId: string) => {
  try {
    const { data } = await api.get(`/student/${studentId}`);

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
  getStudentById,
};

export default StudentService;
