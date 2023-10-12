import { useReducer, useEffect } from 'react';
import { reducer } from './reducer';
import { GlobalStateType, CartItemType } from '../../types/CommonTypes';
import { useGlobalVariablesContext } from '../../context/globalVariablesContext';
import { saveCartInLocalStorage, getCartFromLocalStorage } from './utils';
import { useMenuDataContext } from '../../context/menuDataContext';

export const useGlobalState = () => {
  const { menuData } = useMenuDataContext();

  const {
    globalVariables: { freeDeliveryFrom, deliveryPrice, currency },
  } = useGlobalVariablesContext();

  const initialState: GlobalStateType = {
    cart: getCartFromLocalStorage(menuData) || [],
    isCartEmpty: true,
    deliveryPrice: 0,
    subtotalPrice: 0,
    totalPrice: 0,
    freeDeliveryFrom,
    isFreeDelivery: false,
    isSidebarCartOpen: false,
    currency,
  };
  const [globalState, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item: CartItemType) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const deleteCartItem = (item: CartItemType) => {
    dispatch({ type: 'DELETE_CART_ITEM', payload: item });
  };

  const increaseCartItemQuantity = (item: CartItemType) => {
    dispatch({ type: 'INCREASE_CART_ITEM_QUANTITY', payload: item });
  };

  const decreaseCartItemQuantity = (item: CartItemType) => {
    dispatch({ type: 'DECREASE_CART_ITEM_QUANTITY', payload: item });
  };

  const openSidebarCart = () => {
    dispatch({ type: 'OPEN_CART_SIDEBAR' });
  };

  const closeSidebarCart = () => {
    dispatch({ type: 'CLOSE_CART_SIDEBAR' });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  useEffect(() => {
    dispatch({ type: 'COUNT_SUBTOTAL_PRICE' });
  }, [globalState.cart]);

  useEffect(() => {
    dispatch({ type: 'CHECK_DELIVERY_COST', payload: deliveryPrice });
  }, [globalState.cart]);

  useEffect(() => {
    dispatch({ type: 'COUNT_TOTAL_PRICE' });
  }, [globalState.deliveryPrice, globalState.subtotalPrice]);

  useEffect(() => {
    dispatch({ type: 'IS_CART_EMPTY' });
  }, [globalState.cart]);

  useEffect(() => {
    saveCartInLocalStorage(globalState.cart);
  }, [globalState.cart]);

  return {
    globalState,
    addToCart,
    deleteCartItem,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    openSidebarCart,
    closeSidebarCart,
    clearCart,
  };
};
