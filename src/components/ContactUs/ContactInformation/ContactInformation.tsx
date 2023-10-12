import styles from './styles.module.scss';

const { wrapper, wrapper__title, wrapper__text, wrapper__text__prefix } =
  styles;

const ContactInformation: React.FC = () => {
  return (
    <>
      <section className={wrapper}>
        <h1 className={wrapper__title}>Contact Information</h1>
        <p className={wrapper__text}>
          <span className={wrapper__text__prefix}>Address:</span>
          ul.Krakowsa 20
          <br /> 35-504 Rzeszów
        </p>
        <p className={wrapper__text}>
          <span className={wrapper__text__prefix}>Phone:</span>+48 000 000 000
        </p>
        <p className={wrapper__text}>
          <span className={wrapper__text__prefix}>Email:</span>
          contact@yourdomain.com
        </p>
      </section>
    </>
  );
};

export default ContactInformation;
