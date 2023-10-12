import { FormStateType } from '../../../types/CommonTypes';

export const delivertInitialState: FormStateType = {
  name: { value: '', errorMsg: '', isError: false },
  lastName: { value: '', errorMsg: '', isError: false },
  street: { value: '', errorMsg: '', isError: false },
  streetLine2: { value: '', errorMsg: '', isError: false },
  city: { value: '', errorMsg: '', isError: false },
  zipCode: { value: '', errorMsg: '', isError: false },
  email: { value: '', errorMsg: '', isError: false },
  phoneNumber: { value: '', errorMsg: '', isError: false },
};

export const creditCardPaymentInitialState: FormStateType = {
  cardNumber: { value: '', errorMsg: '', isError: false },
  cardholderName: { value: '', errorMsg: '', isError: false },
  expirationDate: { value: '', errorMsg: '', isError: false },
  ccv: { value: '', errorMsg: '', isError: false },
};

export const paymentMethodInitialState: FormStateType = {
  paymentMethod: { value: '', errorMsg: '', isError: false },
};
