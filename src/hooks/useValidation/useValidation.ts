import { FormStateType, ValidatorType } from '../../types/CommonTypes';

export const useValidation = (
  state: FormStateType,
  setState: React.Dispatch<React.SetStateAction<FormStateType>>,
  validator: ValidatorType
) => {
  let hasFormErrors = false;

  const setError = (id: string, errorMsg: string) => {
    setState((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], isError: true, errorMsg: errorMsg },
    }));
  };

  const clearError = (id: string) => {
    setState((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], isError: false, errorMsg: '' },
    }));
  };

  const validate = () => {
    for (const id in state) {
      const { isError, errorMsg } = validator[id](state[id].value);
      if (isError) {
        setError(id, errorMsg);
        hasFormErrors = true;
      } else {
        clearError(id);
      }
    }
    return { hasFormErrors };
  };

  return { validate };
};
