import { useGlobalVariablesContext } from '../../../context/globalVariablesContext';
import ModalAdditionalIngredientItem from '../ModalAdditionalIngredientItem/ModalAdditionalIngredientItem';
import { ModalAdditionalIngredientsProps } from './types';

import styles from './styles.module.scss';

const { wrapper, wrapper__title, wrapper__subtitle, wrapper__container } =
  styles;

const ModalAdditionalIngredients: React.FC<ModalAdditionalIngredientsProps> = ({
  additionalIngredientsForPizza,
  selectedVariant,
  currency,
  addIngredient,
  removeIngredient,
  cartItem,
}) => {
  const {
    globalVariables: { maxAdditionalIngredients },
  } = useGlobalVariablesContext();

  return (
    <>
      <div className={wrapper}>
        <h1 className={wrapper__title}>Additional ingredients:</h1>
        <p
          className={wrapper__subtitle}
        >{`(Maximum ${maxAdditionalIngredients} ingredients)`}</p>
        <ul className={wrapper__container}>
          {additionalIngredientsForPizza.map((ingredient) => {
            return (
              <ModalAdditionalIngredientItem
                key={ingredient.id}
                selectedVariant={selectedVariant}
                currency={currency}
                addIngredient={addIngredient}
                removeIngredient={removeIngredient}
                cartItem={cartItem}
                ingredient={ingredient}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ModalAdditionalIngredients;
