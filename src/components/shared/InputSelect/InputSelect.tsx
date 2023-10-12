import { InputSelectProps } from './types';
import styles from './styles.module.scss';

const { wrapper, wrapper__input } = styles;

const InputSelect: React.FC<InputSelectProps> = ({
  displayText,
  name,
  id,
  value,
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <>
      <label className={wrapper}>
        <input
          className={wrapper__input}
          type="radio"
          name={name}
          id={id}
          value={value}
          checked={selectedOption === value}
          onChange={handleOptionChange}
        />
        {displayText}
      </label>
    </>
  );
};

export default InputSelect;
