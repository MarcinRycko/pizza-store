import { useGlobalStateContext } from '../../../context/globalStateContext';
import CartItem from '../CartItem/CartItem';
import styles from './styles.module.scss';

const { wrapper, wrapper__title } = styles;

const Order: React.FC = () => {
  const {
    state: {
      globalState: { cart, isCartEmpty },
    },
  } = useGlobalStateContext();
  return (
    <>
      <div className={wrapper}>
        <h1 className={wrapper__title}>Order</h1>
        {!isCartEmpty &&
          cart.map((el) => <CartItem key={el.cartItemId} item={el} />)}
      </div>
    </>
  );
};

export default Order;
