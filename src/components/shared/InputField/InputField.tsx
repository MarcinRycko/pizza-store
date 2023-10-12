import { useState } from 'react';
import InputMask from 'react-input-mask';
import { InputFieldProps } from './types';
import { cx } from '../../../utils/cx';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__label,
  wrapper__label_active,
  wrapper__label_required,
  wrapper__input,
  wrapper__error,
} = styles;

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  isRequired,
  data: { value, errorMsg },
  mask,
  handleInputChange,
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleActiveOn = () => setIsActive(true);
  const handleActiveOff = () => setIsActive(false);
  return (
    <>
      <div
        className={wrapper}
        onFocus={handleActiveOn}
        onBlur={handleActiveOff}
      >
        <label
          htmlFor={id}
          className={cx(
            wrapper__label,
            (isActive || value.length !== 0) && wrapper__label_active,
            isRequired && wrapper__label_required
          )}
        >
          {name}
        </label>
        {mask ? (
          <InputMask
            mask={mask}
            maskChar={''}
            className={wrapper__input}
            id={id}
            autoComplete="off"
            value={value}
            onChange={handleInputChange}
          />
        ) : (
          <input
            className={wrapper__input}
            id={id}
            autoComplete="off"
            value={value}
            onChange={handleInputChange}
          />
        )}
        <span className={wrapper__error}>{errorMsg}</span>
      </div>
    </>
  );
};

export default InputField;
