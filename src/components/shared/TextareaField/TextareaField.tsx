import { useState } from 'react';
import { TextareaFieldProps } from './types';
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

const TextareaField: React.FC<TextareaFieldProps> = ({
  id,
  name,
  isRequired,
  data: { value, errorMsg },
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
            isRequired && wrapper__label_required,
            (isActive || value.length !== 0) && wrapper__label_active
          )}
        >
          {name}
        </label>
        <textarea
          className={wrapper__input}
          id={id}
          autoComplete="off"
          maxLength={200}
          value={value}
          onChange={handleInputChange}
        />
        <span className={wrapper__error}>{errorMsg}</span>
      </div>
    </>
  );
};

export default TextareaField;
