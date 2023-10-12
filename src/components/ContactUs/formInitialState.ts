import { FormStateType } from '../../types/CommonTypes';

export const contactUsInitialState: FormStateType = {
  name: { value: '', errorMsg: '', isError: false },
  email: { value: '', errorMsg: '', isError: false },
  subject: { value: '', errorMsg: '', isError: false },
  message: { value: '', errorMsg: '', isError: false },
};
