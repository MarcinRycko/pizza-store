import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__container,
  wrapper__container__title,
  wrapper__container__subtitle,
  wrapper__container__description,
  wrapper__container__link,
} = styles;

const NotFound: React.FC = () => {
  return (
    <>
      <div className={wrapper}>
        <div className={wrapper__container}>
          <h1 className={wrapper__container__title}>Oops!</h1>
          <p className={wrapper__container__subtitle}>Page not found</p>
          <p className={wrapper__container__description}>
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <Link to={'/'} className={wrapper__container__link}>
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
