import { useGlobalStateContext } from '../../../context/globalStateContext';
import ProgressBar from '../ProgressBar/ProgressBar';
import { SummaryProps } from './types';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__container,
  wrapper__container__title,
  summary,
  summary__title,
  summary__price,
  summary__total,
  summary__total__price,
  progressBar,
  progressBar__text,
  button,
} = styles;

const Summary: React.FC<SummaryProps> = ({ handleSubmit }) => {
  const {
    state: {
      globalState: {
        subtotalPrice,
        deliveryPrice,
        totalPrice,
        isFreeDelivery,
        freeDeliveryFrom,
        currency,
      },
    },
  } = useGlobalStateContext();

  return (
    <>
      <div className={wrapper}>
        <div className={wrapper__container}>
          <h1 className={wrapper__container__title}>Summary</h1>
          <div className={summary}>
            <h2 className={summary__title}>Subtotal:</h2>
            <p className={summary__price}>
              <span>{subtotalPrice}</span>
              <span>{currency}</span>
            </p>
          </div>
          <div className={summary}>
            <h2 className={summary__title}>Delivery:</h2>
            <p className={summary__price}>
              <span>{deliveryPrice}</span>
              <span>{currency}</span>
            </p>
          </div>
          <div className={progressBar}>
            {isFreeDelivery ? (
              <p className={progressBar__text}>
                Congrats, you're eligible for <strong>FREE DELIVERY</strong>
              </p>
            ) : (
              <p className={progressBar__text}>
                Add {freeDeliveryFrom - subtotalPrice}
                {currency} to get
                <strong>FREE DELIVERY</strong>
              </p>
            )}
            <ProgressBar />
          </div>
          <div className={summary}>
            <h2 className={summary__total}>Total:</h2>
            <p className={summary__total__price}>
              <span>{totalPrice}</span>
              <span>{currency}</span>
            </p>
          </div>
          <button onClick={handleSubmit} className={button}>
            Order now
          </button>
        </div>
      </div>
    </>
  );
};

export default Summary;
