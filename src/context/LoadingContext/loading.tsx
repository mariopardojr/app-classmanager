import React, { createContext, useContext, useState } from 'react';

interface LoadingContextState {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextState>({} as LoadingContextState);

export const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>{children}</LoadingContext.Provider>;
};

export const useLoading = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }

  return context;
};
