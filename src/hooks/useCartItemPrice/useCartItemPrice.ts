import { useState, useEffect } from 'react';
import { CartItemType } from '../../types/CommonTypes';

export const useCartItemPrice = (item: CartItemType) => {
  const [cartItemPrice, setCartItemPrice] = useState<number>(0);

  useEffect(() => {
    const productVariantPrice = item.selectedVariant.price;
    const productQuantity = item.quantity;

    if (!productVariantPrice || !productQuantity) return;

    let totalPrice = 0;
    if (item.additionalIngredients.length <= 0) {
      totalPrice = productVariantPrice * item.quantity;
    } else {
      const productPrice = productVariantPrice * item.quantity;
      const ingredientsPrice = item.additionalIngredients.reduce(
        (acc, curr) => {
          if (!curr.variant.price) return acc;
          return acc + curr.variant.price;
        },
        0
      );
      totalPrice = productPrice + ingredientsPrice * productQuantity;
    }

    setCartItemPrice(totalPrice);
  }, [item.quantity, item.selectedVariant, item.additionalIngredients]);

  return { cartItemPrice };
};
