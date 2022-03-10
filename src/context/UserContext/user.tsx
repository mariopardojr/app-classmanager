import React, { createContext, useContext, useState } from 'react';
import { UserContextState, User } from './types';

const UserContext = createContext<UserContextState>({} as UserContextState);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
};
