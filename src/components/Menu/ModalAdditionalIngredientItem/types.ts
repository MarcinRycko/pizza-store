import {
  AdditionalIngredientItemType,
  CartItemType,
  VariantType,
} from '../../../types/CommonTypes';

export type ModalAdditionalIngredientItemProps = {
  selectedVariant: VariantType;
  currency: string;
  addIngredient: (ingredient: AdditionalIngredientItemType) => void;
  removeIngredient: (ingredient: AdditionalIngredientItemType) => void;
  cartItem: CartItemType;
  ingredient: AdditionalIngredientItemType;
};
