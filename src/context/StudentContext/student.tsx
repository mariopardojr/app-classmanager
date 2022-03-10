import React, { createContext, useContext, useState } from 'react';
import { Student, StudentContextState } from './types';

export const StudentContext = createContext<StudentContextState>({} as StudentContextState);

export const StudentProvider: React.FC = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);

  return <StudentContext.Provider value={{ students, setStudents }}>{children}</StudentContext.Provider>;
};

export const useStudent = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }

  return context;
};
