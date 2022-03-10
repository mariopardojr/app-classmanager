import React, { createContext, useContext, useState } from 'react';
import UserService from '../../services/UserService/UserService';
import { UserContextState, User } from './types';

const UserContext = createContext<UserContextState>({} as UserContextState);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);

  const getUser = async (id: string): Promise<void> => {
    const result = await UserService.getUser(id);
    setUser(result.user);
  };

  return <UserContext.Provider value={{ user, setUser, getUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
};
