import {
  AdditionalIngredientItemType,
  CartItemType,
  VariantType,
} from '../../../types/CommonTypes';

export type ModalAdditionalIngredientsProps = {
  additionalIngredientsForPizza: AdditionalIngredientItemType[];
  selectedVariant: VariantType;
  currency: string;
  addIngredient: (ingredient: AdditionalIngredientItemType) => void;
  removeIngredient: (ingredient: AdditionalIngredientItemType) => void;
  cartItem: CartItemType;
};
