import { ModalHeadingProps } from './types';
import styles from './styles.module.scss';

const { wrapper, wrapper__image, wrapper__title, wrapper__text } = styles;

const ModalHeading: React.FC<ModalHeadingProps> = ({
  image,
  name,
  ingredients,
}) => {
  return (
    <div className={wrapper}>
      <img className={wrapper__image} {...image} />
      <div>
        <h1 className={wrapper__title}>{name}</h1>
        <p className={wrapper__text}>{ingredients}</p>
      </div>
    </div>
  );
};

export default ModalHeading;
