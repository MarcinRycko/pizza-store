import {
  AdditionalIngredientCartItemType,
  CartItemType,
} from '../../types/CommonTypes';

export type ACTIONTYPE =
  | { type: 'ADD_TO_CART'; payload: CartItemType }
  | { type: 'DELETE_CART_ITEM'; payload: CartItemType }
  | { type: 'INCREASE_CART_ITEM_QUANTITY'; payload: CartItemType }
  | { type: 'DECREASE_CART_ITEM_QUANTITY'; payload: CartItemType }
  | { type: 'OPEN_CART_SIDEBAR' }
  | { type: 'CLOSE_CART_SIDEBAR' }
  | { type: 'COUNT_SUBTOTAL_PRICE' }
  | { type: 'CHECK_DELIVERY_COST'; payload: number }
  | { type: 'COUNT_TOTAL_PRICE' }
  | { type: 'IS_CART_EMPTY' }
  | { type: 'CLEAR_CART' };

export type PreparedStorageCartItem = {
  cartItemId: string;
  itemId: string;
  variantId: string;
  quantity: number;
  parentCategoryId: string;
  additionalIngredients: AdditionalIngredientCartItemType[];
};
