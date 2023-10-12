import { useState } from 'react';
import { FormStateType } from '../../types/CommonTypes';

export const useFillingInput = (initialState: FormStateType) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;
    setState((prev) => ({
      ...prev,
      [id]: { ...prev[id], value },
    }));
  };

  const restoreInitialState = () => {
    setState(initialState);
  };

  return { state, setState, handleInputChange, restoreInitialState };
};
