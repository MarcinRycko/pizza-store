import { VariantType } from '../../../types/CommonTypes';

export const ingredientPriceToDisplay = (
  variants: VariantType[],
  selectedVariant: VariantType
) => {
  const currentVariant = variants.find(
    ({ size }) => size === selectedVariant.size
  );
  return currentVariant ? currentVariant.price : 0;
};
