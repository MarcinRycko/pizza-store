import { useEffect } from 'react';
import { useToggler } from '../../../hooks';
import {
  AdditionalIngredientItemType,
  CartItemType,
  VariantType,
} from '../../../types/CommonTypes';
import { ingredientPriceToDisplay } from './utils';

export const useAdditionalIngredient = (
  ingredient: AdditionalIngredientItemType,
  selectedVariant: VariantType,
  cartItem: CartItemType
) => {
  const { isActive, setActive, setDisabled } = useToggler();

  const priceToDisplay = ingredientPriceToDisplay(
    ingredient.variants,
    selectedVariant
  );

  useEffect(() => {
    const isIngredientAdded = cartItem.additionalIngredients.find(
      (el) => el.id === ingredient.id
    );

    if (isIngredientAdded) setActive();
    else setDisabled();
  }, [cartItem.additionalIngredients]);

  return { isActive, priceToDisplay };
};
