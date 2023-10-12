import { useEffect, useState } from 'react';
import { findIngredient, findIngredientVariant } from './utilts';
import {
  AdditionalIngredientItemType,
  CartItemType,
  MenuItemType,
  VariantType,
} from '../../../types/CommonTypes';
import { v4 as uuidv4 } from 'uuid';
import { useCartItemPrice } from '../../../hooks';
import { useGlobalVariablesContext } from '../../../context/globalVariablesContext';

export const useModalState = (
  data: MenuItemType,
  additionalIngredientsForPizza: AdditionalIngredientItemType[]
) => {
  const { id, name, ingredients, image, variants, parentCategoryId } = data;

  const {
    globalVariables: { maxAdditionalIngredients },
  } = useGlobalVariablesContext();

  const [cartItem, setCartItem] = useState<CartItemType>({
    cartItemId: uuidv4(),
    itemId: id,
    name,
    ingredients,
    image,
    selectedVariant: variants[0],
    quantity: 1,
    parentCategoryId,
    additionalIngredients: [],
  });

  const { cartItemPrice: modalPrice } = useCartItemPrice(cartItem);

  const increaseQuantity = () => {
    setCartItem((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseQuantity = () => {
    if (cartItem.quantity <= 1) return;
    setCartItem((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  const selectVariant = (variant: VariantType) => {
    setCartItem((prev) => ({ ...prev, selectedVariant: variant }));
  };

  const addIngredient = (ingredient: AdditionalIngredientItemType) => {
    if (cartItem.additionalIngredients.length >= maxAdditionalIngredients)
      return;

    const isIngredientAlreadyAdded = findIngredient(
      cartItem.additionalIngredients,
      ingredient
    );
    if (isIngredientAlreadyAdded) return;

    const preparedCurrentVariant = findIngredientVariant(
      ingredient.variants,
      cartItem.selectedVariant
    );

    if (!preparedCurrentVariant) return;

    const preparedIngredient = {
      id: ingredient.id,
      name: ingredient.name,
      variant: preparedCurrentVariant,
    };

    setCartItem((prev) => ({
      ...prev,
      additionalIngredients: [
        ...prev.additionalIngredients,
        preparedIngredient,
      ],
    }));
  };

  const removeIngredient = (ingredient: AdditionalIngredientItemType) => {
    const isIngredientAlreadyAdded = findIngredient(
      cartItem.additionalIngredients,
      ingredient
    );
    if (!isIngredientAlreadyAdded) return;

    const filteredAdditionalIngredients = cartItem.additionalIngredients.filter(
      ({ id }) => id !== ingredient.id
    );

    setCartItem((prev) => ({
      ...prev,
      additionalIngredients: filteredAdditionalIngredients,
    }));
  };

  useEffect(() => {
    const updatedIngredients = cartItem.additionalIngredients.map(
      (ingredient) => {
        const currentIngredient = additionalIngredientsForPizza.find(
          (item) => item.id === ingredient.id
        );
        if (!currentIngredient) return ingredient;

        const preparedIngredientVariant = findIngredientVariant(
          currentIngredient.variants,
          cartItem.selectedVariant
        );
        if (!preparedIngredientVariant) return ingredient;

        const preparedIngredient = {
          id: ingredient.id,
          name: ingredient.name,
          variant: preparedIngredientVariant,
        };

        return preparedIngredient;
      }
    );
    setCartItem((prev) => ({
      ...prev,
      additionalIngredients: updatedIngredients,
    }));
  }, [cartItem.selectedVariant]);

  return {
    modalPrice,
    cartItem,
    increaseQuantity,
    decreaseQuantity,
    selectVariant,
    addIngredient,
    removeIngredient,
  };
};
