import { useContactForm } from './hook';
import ModalPortal from '../../portal/ModalPortal';
import ContactForm from './ContactForm/ContactForm';
import ContactInformation from './ContactInformation/ContactInformation';
import SuccessMessage from './SuccessMessage/SuccessMessage';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__container,
  wrapper__container__title,
  wrapper__container__content,
} = styles;

const ContactUs: React.FC = () => {
  const { formData, isFormSubmitted, handleCloseModal } = useContactForm();

  return (
    <>
      <section className={wrapper}>
        <div className={wrapper__container}>
          <h1 className={wrapper__container__title}>Contact Us</h1>
          <div className={wrapper__container__content}>
            <ContactInformation />
            <ContactForm {...formData} />
          </div>
        </div>
        {isFormSubmitted && (
          <ModalPortal>
            <SuccessMessage handleCloseModal={handleCloseModal} />
          </ModalPortal>
        )}
      </section>
    </>
  );
};

export default ContactUs;
