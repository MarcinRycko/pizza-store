import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__backdrop,
  wrapper__container,
  wrapper__container__title,
  wrapper__container__subtitle,
  wrapper__container__link,
} = styles;

const HomeHero: React.FC = () => {
  return (
    <>
      <div className={wrapper}>
        <div className={wrapper__backdrop} />
        <div className={wrapper__container}>
          <span className={wrapper__container__subtitle}>Welcome</span>
          <h1 className={wrapper__container__title}>
            <span>Only here you will eat</span>
            <span>Best pizza in town</span>
          </h1>
          <Link to={'/menu'} className={wrapper__container__link}>
            View menu
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
