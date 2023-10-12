import { useCallback } from 'react';
import { ModalSizesProps } from './types';
import { VariantType } from '../../../types/CommonTypes';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__container,
  wrapper__container__title,
  element,
  element__input,
  element__label,
} = styles;

const ModalSizes: React.FC<ModalSizesProps> = ({
  variants,
  selectVariant,
  cartItem: { selectedVariant },
  currency,
}) => {
  const handleChange = useCallback(
    (variant: VariantType) => {
      selectVariant(variant);
    },
    [selectVariant]
  );

  return (
    <>
      <form className={wrapper}>
        <fieldset className={wrapper__container}>
          <legend className={wrapper__container__title}>Size:</legend>
          {variants.map((variant) => (
            <div className={element} key={variant.variantId}>
              <input
                className={element__input}
                type="radio"
                id={variant.variantId}
                name="size"
                onChange={() => handleChange(variant)}
                checked={selectedVariant.variantId === variant.variantId}
              />
              <label className={element__label} htmlFor={variant.variantId}>
                <span>{variant.size}</span>
                <span>
                  {variant.price}
                  {currency}
                </span>
              </label>
            </div>
          ))}
        </fieldset>
      </form>
    </>
  );
};

export default ModalSizes;
