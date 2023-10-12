import { useGlobalStateContext } from '../../context/globalStateContext';
import Nav from './Nav/Nav';
import { NavLink } from 'react-router-dom';
import { GiFullPizza } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { useHeader } from './hooks';
import { cx } from '../../utils/cx';
import styles from './styles.module.scss';

const {
  wrapper,
  navIcon,
  navIcon_active,
  navIcon__Inner,
  navIcon__Inner_active,
  logo,
  logo__icon,
  cartIcon,
  cartIcon__content,
  cartIcon__content__icon,
  cartIcon__content__counter,
} = styles;

const Header: React.FC = () => {
  const {
    state: {
      openSidebarCart,
      globalState: { cart, isCartEmpty },
    },
  } = useGlobalStateContext();
  const { isNavBarOpen, handleToggleOpen, handleClose } = useHeader();

  return (
    <>
      <header className={wrapper}>
        <div
          className={cx(navIcon, isNavBarOpen && navIcon_active)}
          onClick={handleToggleOpen}
        >
          <span
            className={cx(
              navIcon__Inner,
              isNavBarOpen && navIcon__Inner_active
            )}
          />
        </div>
        <NavLink to="/" className={logo}>
          <GiFullPizza className={logo__icon} />
        </NavLink>
        <Nav isNavBarOpen={isNavBarOpen} handleClose={handleClose} />
        <div className={cartIcon}>
          <div className={cartIcon__content}>
            <FaShoppingCart
              className={cartIcon__content__icon}
              onClick={openSidebarCart}
            />
            {!isCartEmpty ? (
              <div
                className={cartIcon__content__counter}
                onClick={openSidebarCart}
              >
                {cart.length}
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
