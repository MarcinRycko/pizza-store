import { useState } from 'react';

export const useToggler = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const setActive = () => {
    setIsActive(true);
  };

  const setDisabled = () => {
    setIsActive(false);
  };

  const toggle = () => {
    setIsActive((prev) => !prev);
  };

  return { isActive, setActive, setDisabled, toggle };
};
