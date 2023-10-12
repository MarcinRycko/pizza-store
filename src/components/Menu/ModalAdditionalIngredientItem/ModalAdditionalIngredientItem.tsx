import { ModalAdditionalIngredientItemProps } from './types';
import { useAdditionalIngredient } from './hooks';
import { cx } from '../../../utils/cx';
import styles from './styles.module.scss';

const {
  element,
  element__button,
  element__button_active,
  element__label,
  element__price,
} = styles;

const ModalAdditionalIngredientItem: React.FC<
  ModalAdditionalIngredientItemProps
> = ({
  selectedVariant,
  currency,
  addIngredient,
  removeIngredient,
  cartItem,
  ingredient,
}) => {
  const { isActive, priceToDisplay } = useAdditionalIngredient(
    ingredient,
    selectedVariant,
    cartItem
  );
  return (
    <>
      <li className={element}>
        {!isActive ? (
          <button
            className={element__button}
            onClick={() => addIngredient(ingredient)}
          >
            +
          </button>
        ) : (
          <button
            className={cx(element__button, isActive && element__button_active)}
            onClick={() => removeIngredient(ingredient)}
          >
            -
          </button>
        )}
        <span className={element__label}>{ingredient.name}</span>
        <span className={element__price}>
          {priceToDisplay}
          {currency}
        </span>
      </li>
    </>
  );
};

export default ModalAdditionalIngredientItem;
