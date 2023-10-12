import { createContext, useContext, ReactNode } from 'react';
import { useGlobalState } from '../hooks';
import { GlobalStateContextType } from '../types/CommonTypes';

const GlobalStateContext = createContext<GlobalStateContextType | null>(null);

export const useGlobalStateContext = () => {
  const contextValue = useContext(GlobalStateContext);
  if (contextValue === null) {
    throw Error('Context has not been Provided!');
  }
  return contextValue;
};

export const GlobalStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const state = useGlobalState();

  return (
    <GlobalStateContext.Provider value={{ state }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
