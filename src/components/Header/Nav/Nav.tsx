import { NavLink } from 'react-router-dom';
import { cx } from '../../../utils/cx';
import { NavProps } from './types';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper_open,
  wrapper__list,
  listItem,
  listItem__element,
  listItem_active,
  backdrop,
} = styles;

const Nav: React.FC<NavProps> = ({ isNavBarOpen, handleClose }) => {
  return (
    <>
      <nav className={cx(wrapper, isNavBarOpen && wrapper_open)}>
        <ul className={wrapper__list}>
          <li className={listItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? listItem_active : listItem__element
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={listItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? listItem_active : listItem__element
              }
              to="/menu"
            >
              Menu
            </NavLink>
          </li>
          <li className={listItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? listItem_active : listItem__element
              }
              to="/special"
            >
              Special offer
            </NavLink>
          </li>
          <li className={listItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? listItem_active : listItem__element
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li className={listItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? listItem_active : listItem__element
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={cx(isNavBarOpen && backdrop)} onClick={handleClose} />
    </>
  );
};

export default Nav;
