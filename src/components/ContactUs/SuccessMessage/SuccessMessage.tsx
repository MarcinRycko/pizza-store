import { IoCloseSharp } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
import { SuccessMessgeProps } from './types';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__backdrop,
  content,
  content__button,
  content__button__icon,
  content__icon,
} = styles;

const SuccessMessage: React.FC<SuccessMessgeProps> = ({ handleCloseModal }) => {
  return (
    <>
      <div className={wrapper}>
        <div className={wrapper__backdrop} onClick={handleCloseModal} />
        <div className={content}>
          <div className={content__button} onClick={handleCloseModal}>
            <IoCloseSharp className={content__button__icon} />
          </div>
          <FaCheckCircle className={content__icon} />
          <h1>Thank you!</h1>
          <p>We received your message! Will get back to you shortly.</p>
        </div>
      </div>
    </>
  );
};

export default SuccessMessage;
