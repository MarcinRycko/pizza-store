import { FormStateType } from '../../../types/CommonTypes';

type CreditCardPaymentDataType = {
  creditCardPaymentState: FormStateType;
  handleCreditCardPaymentInputChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export type PaymentProps = {
  paymentMethodState: FormStateType;
  handlePaymentMethodChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  creditCardPaymentData: CreditCardPaymentDataType;
};
