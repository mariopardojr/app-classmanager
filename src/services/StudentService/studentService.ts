import { AxiosError } from 'axios';
import { api } from '../api';
import { IRawStudent } from '../interfaces/IRawStudent';
import { StudentResponse, StudentValuesRegister } from './types';

const createStudent = async (student: StudentValuesRegister): Promise<StudentResponse> => {
  try {
    const { data } = await api.post<StudentResponse>('/student/register', student);

    return data;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};

const getStudentById = async (studentId: string): Promise<StudentResponse> => {
  try {
    const { data } = await api.get<StudentResponse>(`/student/${studentId}`);

    return data;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};

const getAllStudentsByTeacherId = async (teacherId: string): Promise<{ status: number; students: IRawStudent[] }> => {
  const { data } = await api.get<{ status: number; students: IRawStudent[] }>(`/student/students/${teacherId}`);

  return data;
};

const StudentService = {
  createStudent,
  getStudentById,
  getAllStudentsByTeacherId,
};

export default StudentService;
