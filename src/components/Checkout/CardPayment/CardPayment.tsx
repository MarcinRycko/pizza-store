import InputField from '../../shared/InputField/InputField';
import { CardPaymentProps } from './types';
import styles from './styles.module.scss';

const { wrapper, wrapper__common } = styles;

const CardPayment: React.FC<CardPaymentProps> = ({
  creditCardPaymentState: { cardNumber, cardholderName, expirationDate, ccv },
  handleCreditCardPaymentInputChange,
}) => {
  return (
    <>
      <div className={wrapper}>
        <InputField
          id="cardNumber"
          name="Card number"
          mask="9999 9999 9999 9999"
          isRequired
          data={cardNumber}
          handleInputChange={handleCreditCardPaymentInputChange}
        />
        <InputField
          id="cardholderName"
          name="Card holder name"
          isRequired
          data={cardholderName}
          handleInputChange={handleCreditCardPaymentInputChange}
        />
        <div className={wrapper__common}>
          <InputField
            id="expirationDate"
            name="MM/YY"
            isRequired
            mask="99/99"
            data={expirationDate}
            handleInputChange={handleCreditCardPaymentInputChange}
          />
          <InputField
            id="ccv"
            name="CCV"
            mask="999"
            isRequired
            data={ccv}
            handleInputChange={handleCreditCardPaymentInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default CardPayment;
