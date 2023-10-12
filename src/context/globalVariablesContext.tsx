import { createContext, useContext, ReactNode } from 'react';
import { globalVariables } from '../data/globalVariables';
import { GlobalVariablesContextType } from '../types/CommonTypes';

const GlobalVariablesContext = createContext<GlobalVariablesContextType | null>(
  { globalVariables }
);

export const useGlobalVariablesContext = () => {
  const contextValue = useContext(GlobalVariablesContext);
  if (!contextValue) {
    throw Error('Context has not been Provided!');
  }
  return contextValue;
};

export const GlobalVariablesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <GlobalVariablesContext.Provider value={{ globalVariables }}>
      {children}
    </GlobalVariablesContext.Provider>
  );
};
