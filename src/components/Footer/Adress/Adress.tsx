import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import styles from './styles.module.scss';

const {
  adress,
  adress__title,
  content,
  content__paragraph,
  content__paragraph__icon,
  content__paragraph__text,
} = styles;

const Adress: React.FC = () => {
  return (
    <>
      <div className={adress}>
        <h1 className={adress__title}>Contact</h1>
        <div className={content}>
          <div className={content__paragraph}>
            <FaMapMarkerAlt className={content__paragraph__icon} />
            <p className={content__paragraph__text}>
              ul.Krakowsa 20 35-504 Rzeszów
            </p>
          </div>
          <div className={content__paragraph}>
            <BsFillTelephoneFill className={content__paragraph__icon} />
            <a href="tel:000-000-000" className={content__paragraph__text}>
              +48 000 000 000
            </a>
          </div>
          <div className={content__paragraph}>
            <MdEmail className={content__paragraph__icon} />
            <a
              href="mailto: contact@yourdomain.com"
              className={content__paragraph__text}
            >
              contact@yourdomain.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adress;
