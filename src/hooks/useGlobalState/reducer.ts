import { ACTIONTYPE } from './types';
import { GlobalStateType } from '../../types/CommonTypes';

export const reducer = (state: GlobalStateType, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'DELETE_CART_ITEM':
      const newCart = state.cart.filter((item) => {
        return item.cartItemId !== action.payload.cartItemId;
      });
      return { ...state, cart: newCart };

    case 'INCREASE_CART_ITEM_QUANTITY':
      const increaseCart = state.cart.map((el) => {
        if (el.cartItemId === action.payload.cartItemId) {
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });
      return {
        ...state,
        cart: increaseCart,
      };

    case 'DECREASE_CART_ITEM_QUANTITY':
      const decreaseCart = state.cart.map((el) => {
        if (el.cartItemId === action.payload.cartItemId) {
          if (el.quantity > 1) return { ...el, quantity: el.quantity - 1 };
          return el;
        }
        return el;
      });
      return {
        ...state,
        cart: decreaseCart,
      };

    case 'OPEN_CART_SIDEBAR':
      return { ...state, isSidebarCartOpen: true };

    case 'CLOSE_CART_SIDEBAR':
      return { ...state, isSidebarCartOpen: false };

    case 'COUNT_SUBTOTAL_PRICE':
      if (state.cart.length > 0) {
        const subtotal = state.cart.reduce((acc, curr) => {
          const productPrice = curr.selectedVariant.price;
          const ingredientsPrice = curr.additionalIngredients.reduce(
            (acc, curr) => {
              if (!curr.variant.price) return acc;
              return acc + curr.variant.price;
            },
            0
          );
          const totalPrice = (productPrice + ingredientsPrice) * curr.quantity;
          return acc + totalPrice;
        }, 0);
        return { ...state, subtotalPrice: subtotal };
      }
      return { ...state, subtotalPrice: 0 };

    case 'COUNT_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: state.subtotalPrice + state.deliveryPrice,
      };

    case 'CHECK_DELIVERY_COST':
      const isFreeDelivery = state.subtotalPrice >= state.freeDeliveryFrom;
      const newDeliveryPrice = isFreeDelivery ? 0 : action.payload;
      return {
        ...state,
        deliveryPrice: newDeliveryPrice,
        isFreeDelivery: isFreeDelivery,
      };

    case 'IS_CART_EMPTY':
      const checkIsCartEmpty = !(state.cart.length !== 0);
      return { ...state, isCartEmpty: checkIsCartEmpty };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        isCartEmpty: true,
        deliveryPrice: 0,
        subtotalPrice: 0,
        totalPrice: 0,
        isFreeDelivery: false,
      };

    default:
      throw new Error('Undefined type of action');
  }
};
