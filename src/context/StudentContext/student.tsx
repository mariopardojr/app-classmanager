import React, { createContext, useCallback, useContext, useState } from 'react';
import { HttpStatusCode } from '../../contracts/result/http-status-code';
import StudentService from '../../services/StudentService/studentService';
import { useUser } from '../UserContext/user';
import { Student, StudentContextState } from './types';

export const StudentContext = createContext<StudentContextState>({} as StudentContextState);

export const StudentProvider: React.FC = ({ children }) => {
  const { user } = useUser();
  const [students, setStudents] = useState<Student[]>([]);

  const refreshStudents = useCallback(async () => {
    const result = await StudentService.getAllStudentsByTeacherId(user._id);
    if (result.status === HttpStatusCode.SUCCESS) {
      setStudents(result.students);
    }
  }, [user]);

  return (
    <StudentContext.Provider value={{ students, setStudents, refreshStudents }}>{children}</StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }

  return context;
};
