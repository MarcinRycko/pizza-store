import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__container,
  wrapper__container__icon,
  wrapper__container__title,
  wrapper__container__description,
  wrapper__container__link,
} = styles;

const OrderSuccessMessage: React.FC = () => {
  return (
    <>
      <div className={wrapper}>
        <div className={wrapper__container}>
          <FaCheckCircle className={wrapper__container__icon} />
          <h1 className={wrapper__container__title}>
            Thank you for your order!
          </h1>
          <p className={wrapper__container__description}>
            The order confirmation email with details of your order has been
            sent to your email address
          </p>
          <Link to={'/'} className={wrapper__container__link}>
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderSuccessMessage;
