import React, { createContext, useCallback, useContext, useState } from 'react';
import StudentService from '../../services/StudentService/studentService';
import { Student } from '../../services/StudentService/types';
import { StudentContextState } from './types';

export const StudentContext = createContext<StudentContextState>({} as StudentContextState);

export const StudentProvider: React.FC = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);

  const getStudents = useCallback(async (): Promise<void> => {
    console.log('Chamou nois!!!');
    const resultGetStudents = await StudentService.getStudents();
    setStudents(resultGetStudents);
  }, []);

  return <StudentContext.Provider value={{ students, getStudents }}>{children}</StudentContext.Provider>;
};

export const useStudent = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error('useStudent must be used within an StudentProvider');
  }

  return context;
};
