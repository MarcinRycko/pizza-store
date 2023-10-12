import InputSelect from '../../shared/InputSelect/InputSelect';
import CardPayment from '../CardPayment/CardPayment';
import { PaymentProps } from './types';
import styles from './styles.module.scss';

const { wrapper, wrapper__title, wrapper__error, wrapper__form } = styles;

const Payment: React.FC<PaymentProps> = ({
  paymentMethodState: {
    paymentMethod: { value, errorMsg },
  },
  handlePaymentMethodChange,
  creditCardPaymentData,
}) => {
  return (
    <>
      <div className={wrapper}>
        <h1 className={wrapper__title}>Payment</h1>
        <div className={wrapper__error}>{errorMsg}</div>
        <form className={wrapper__form}>
          <InputSelect
            name="creditCardNow"
            id="paymentMethod"
            value="creditCardNow"
            displayText="Card now"
            selectedOption={value}
            handleOptionChange={handlePaymentMethodChange}
          />
          {value === 'creditCardNow' && (
            <CardPayment {...creditCardPaymentData} />
          )}
          <InputSelect
            name="cashOnDelivery"
            id="paymentMethod"
            value="cashOnDelivery"
            displayText="Cash on delivery"
            selectedOption={value}
            handleOptionChange={handlePaymentMethodChange}
          />
          <InputSelect
            name="cardOnDelivery"
            id="paymentMethod"
            value="cardOnDelivery"
            displayText="Card on delivery"
            selectedOption={value}
            handleOptionChange={handlePaymentMethodChange}
          />
        </form>
      </div>
    </>
  );
};

export default Payment;
