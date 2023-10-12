import {
  AdditionalIngredientCartItemType,
  AdditionalIngredientItemType,
  VariantType,
} from '../../../types/CommonTypes';

export const findIngredient = <
  T extends AdditionalIngredientCartItemType,
  U extends AdditionalIngredientItemType
>(
  ingredientsArray: T[],
  ingredient: U
) => {
  return ingredientsArray.find(({ id }) => id === ingredient.id);
};

export const findIngredientVariant = <T extends VariantType>(
  variantsArray: T[],
  variant: T
) => {
  return variantsArray.find((item) => item.size === variant.size);
};
