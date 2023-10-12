import { useNewsletter } from './hooks';
import styles from './styles.module.scss';

const {
  newsletter,
  newsletter__title,
  newsletter__description,
  newsletter__successMessage,
  form,
  form__fieldset,
  form__input,
  form__button,
  form__errorMsg,
} = styles;

const Newsletter: React.FC = () => {
  const {
    state: {
      email: { value, errorMsg },
    },
    isSended,
    handleInputChange,
    handleSubmit,
  } = useNewsletter();

  return (
    <>
      <div className={newsletter}>
        <h1 className={newsletter__title}>Newsletter</h1>
        <p className={newsletter__description}>
          Sign up for 10% off your next order
        </p>
        {isSended ? (
          <p className={newsletter__successMessage}>Thanks for subscribe</p>
        ) : (
          <form className={form}>
            <fieldset className={form__fieldset}>
              <input
                className={form__input}
                placeholder="Your email adress"
                value={value}
                onChange={handleInputChange}
                id="email"
                formNoValidate
              />
              <button className={form__button} onClick={handleSubmit}>
                Send
              </button>
            </fieldset>
            <span className={form__errorMsg}>{errorMsg}</span>
          </form>
        )}
      </div>
    </>
  );
};

export default Newsletter;
