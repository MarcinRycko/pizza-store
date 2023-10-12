import { useGlobalStateContext } from '../../../context/globalStateContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { cx } from '../../../utils/cx';
import { IoCloseSharp } from 'react-icons/io5';
import {
  useCloseSidebarOnRouteChange,
  useDisableBodyScrolling,
} from '../../../hooks';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper_open,
  closeButton,
  closeButton_icon,
  header,
  header__title,
  items,
  footer,
  footer__price,
  footer__price__label,
  footer__price__text,
  footer__price__currency,
  footer__button,
  footer__button__disabled,
} = styles;

const SidebarCart: React.FC = () => {
  const {
    state: {
      globalState: {
        isSidebarCartOpen,
        cart,
        subtotalPrice,
        isCartEmpty,
        currency,
      },
      closeSidebarCart,
    },
  } = useGlobalStateContext();

  useDisableBodyScrolling(isSidebarCartOpen);
  useCloseSidebarOnRouteChange(isSidebarCartOpen, closeSidebarCart);

  return (
    <>
      <div className={cx(wrapper, isSidebarCartOpen && wrapper_open)}>
        <div className={closeButton} onClick={closeSidebarCart}>
          <IoCloseSharp className={closeButton_icon} />
        </div>
        <div className={header}>
          <h1 className={header__title}>Your Cart</h1>
        </div>
        <div className={items}>
          {!isCartEmpty ? (
            cart.map((el) => <CartItem key={el.cartItemId} item={el} />)
          ) : (
            <div>Cart is empty</div>
          )}
        </div>
        <div className={footer}>
          <div className={footer__price}>
            <p className={footer__price__label}>Total price: </p>
            <p className={footer__price__text}>
              {isCartEmpty ? 0 : subtotalPrice}
            </p>
            <p className={footer__price__currency}>{currency}</p>
          </div>
          <Link
            onClick={!isCartEmpty ? closeSidebarCart : undefined}
            to={!isCartEmpty ? '/cart' : '#'}
            className={isCartEmpty ? footer__button__disabled : footer__button}
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default SidebarCart;
