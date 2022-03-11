import { ResultErrorFactory } from '../../contracts/result/result-error-factory';
import { api } from '../api';
import { IRawStudent } from '../UserService/interfaces/IRawStudent';
import { Note, StudentRegisterData, StudentRegisterResponse, StudentResponse, StudentResponseData } from './types';

const createStudent = async (student: StudentRegisterData): Promise<StudentRegisterResponse> => {
  console.log('service req.body =>', student);
  const { data } = await api.post<StudentRegisterResponse>('/student/register', student);
  console.log('Student service =>', data);
  return data;
};

const getStudentById = async (studentId: string): Promise<StudentResponseData> => {
  try {
    const { data } = await api.get<StudentResponse>(`/student/${studentId}`);

    return data.student;
  } catch (error) {
    // @ts-ignore
    return ResultErrorFactory.create(error);
  }
};

const getAllStudentsByTeacherId = async (teacherId: string): Promise<{ status: number; students: IRawStudent[] }> => {
  const { data } = await api.get<{ status: number; students: IRawStudent[] }>(`/student/students/${teacherId}`);

  return data;
};

const updateNotes = async (id: number, notes: Note[]) => {
  await api.patch(`/students/${id}`, { notes });
};

const StudentService = {
  createStudent,
  updateNotes,
  getStudentById,
  getAllStudentsByTeacherId,
};

export default StudentService;
