import { FormStateType } from '../types/CommonTypes';

export const prepareStateToPost = (state: FormStateType) => {
  const formData = new FormData();

  Object.keys(state).forEach((key) => {
    const potentialValue = state[key];
    if (!potentialValue) return;

    formData.append(key, potentialValue.value);
  });

  return formData;
};
