import { FormStateType } from '../../../types/CommonTypes';

export type CardPaymentProps = {
  creditCardPaymentState: FormStateType;
  handleCreditCardPaymentInputChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};
