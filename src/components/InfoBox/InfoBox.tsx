import { HiPhone } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__container,
  element,
  element__title,
  element__description,
} = styles;

const InfoBox: React.FC = () => {
  return (
    <>
      <section className={wrapper}>
        <div className={wrapper__container}>
          <div className={element}>
            <div className={element__title}>
              <MdLocationOn />
              <h3>Our address</h3>
            </div>
            <p className={element__description}>ul.Krakowsa 20</p>
            <p className={element__description}>35-504 Rzeszów</p>
          </div>
          <div className={element}>
            <div className={element__title}>
              <HiPhone />
              <h3>Call to Us</h3>
            </div>
            <p className={element__description}>+48 000 000 000</p>
            <p className={element__description}>+48 999 999 999</p>
          </div>
          <div className={element}>
            <div className={element__title}>
              <BiTimeFive />
              <h3>Opening hours</h3>
            </div>
            <p className={element__description}>
              Mon. - Thurs. <span>13:00 - 22:00</span>
            </p>
            <p className={element__description}>
              Fri. - Sat. <span>12:00 - 23:00</span>
            </p>
            <p className={element__description}>
              Sunday <span>12:00 - 22:00</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoBox;
