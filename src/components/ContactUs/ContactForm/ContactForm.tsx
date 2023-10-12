import InputField from '../../shared/InputField/InputField';
import TextareaField from '../../shared/TextareaField/TextareaField';
import { ContactFormProps } from './types';
import styles from './styles.module.scss';

const { wrapper, wrapper__button } = styles;

const ContactForm: React.FC<ContactFormProps> = ({
  state: { name, email, subject, message },
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <>
      <form className={wrapper} onSubmit={handleSubmit}>
        <InputField
          id="name"
          name="Name"
          isRequired
          data={name}
          handleInputChange={handleInputChange}
        />
        <InputField
          id="email"
          name="Email"
          isRequired
          data={email}
          handleInputChange={handleInputChange}
        />
        <InputField
          id="subject"
          name="Subject"
          isRequired
          data={subject}
          handleInputChange={handleInputChange}
        />
        <TextareaField
          id="message"
          name="Message"
          isRequired
          data={message}
          handleInputChange={handleInputChange}
        />
        <button className={wrapper__button} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
