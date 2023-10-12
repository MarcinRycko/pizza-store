import { useGlobalStateContext } from '../../../context/globalStateContext';
import { useCheckoutForm } from './hook';
import Delivery from '../Delivery/Delivery';
import Order from '../Order/Order';
import Payment from '../Payment/Payment';
import Summary from '../Summary/Summary';
import EmptyCart from '../EmptyCart/EmptyCart';
import styles from './styles.module.scss';

const { wrapper, wrapper__container, contentWrapper, summaryWrapper } = styles;

const Checkout: React.FC = () => {
  const {
    state: {
      globalState: { isCartEmpty },
    },
  } = useGlobalStateContext();
  const {
    deliveryData,
    paymentMethodData,
    creditCardPaymentData,
    handleSubmit,
  } = useCheckoutForm();

  return (
    <>
      <section className={wrapper}>
        <div className={wrapper__container}>
          {!isCartEmpty ? (
            <>
              <div className={contentWrapper}>
                <Order />
                <Delivery {...deliveryData} />
                <Payment
                  {...paymentMethodData}
                  creditCardPaymentData={creditCardPaymentData}
                />
              </div>
              <div className={summaryWrapper}>
                <Summary handleSubmit={handleSubmit} />
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </div>
      </section>
    </>
  );
};

export default Checkout;
