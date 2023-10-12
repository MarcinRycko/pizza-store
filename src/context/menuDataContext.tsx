import { createContext, useContext, ReactNode } from 'react';
import { MenuDataContextType } from '../types/CommonTypes';
import { menuData } from '../data/menuData';

const MenuDataContext = createContext<MenuDataContextType | null>({ menuData });

export const useMenuDataContext = () => {
  const contextValue = useContext(MenuDataContext);
  if (!contextValue) {
    throw Error('Context has not been Provided!');
  }
  return contextValue;
};

export const MenuDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <MenuDataContext.Provider value={{ menuData }}>
      {children}
    </MenuDataContext.Provider>
  );
};
