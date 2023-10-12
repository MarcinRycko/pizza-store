import {
  CartItemType,
  MenuCategoryType,
  MenuDataType,
  MenuItemType,
} from '../../types/CommonTypes';
import { PreparedStorageCartItem } from './types';

const prepareCartItemsToSaveInLocalstorege = (cart: CartItemType[]) => {
  return cart.reduce((array: PreparedStorageCartItem[], item) => {
    const {
      cartItemId,
      itemId,
      selectedVariant: { variantId },
      quantity,
      additionalIngredients,
      parentCategoryId,
    } = item;

    const preparedLocalStorageItem = {
      cartItemId,
      itemId,
      variantId,
      quantity,
      additionalIngredients,
      parentCategoryId,
    };

    array.push(preparedLocalStorageItem);
    return array;
  }, []);
};

export const saveCartInLocalStorage = (cart: CartItemType[]) => {
  const preparedLocalStorageItem = prepareCartItemsToSaveInLocalstorege(cart);
  const preparedLocalStorageItemJSON = JSON.stringify(preparedLocalStorageItem);
  localStorage.setItem('cart', preparedLocalStorageItemJSON);
};

const findItemItem = <T extends MenuItemType | MenuCategoryType>(
  menuData: T[],
  itemId: string
) => {
  return menuData.find((el) => {
    return el.id === itemId;
  });
};

const findItemVariant = (menuItem: MenuItemType, variantId: string) => {
  return menuItem.variants.find((el) => {
    return el.variantId === variantId;
  });
};

const prepareCartItemsToSetInGlobalState = (
  menuData: MenuDataType,
  localStorageItems: PreparedStorageCartItem[]
): CartItemType[] => {
  return localStorageItems.reduce((cart: CartItemType[], item) => {
    const {
      cartItemId,
      itemId,
      variantId,
      quantity,
      additionalIngredients,
      parentCategoryId,
    } = item;

    const categoryItem = findItemItem(menuData.categories, parentCategoryId);
    menuData.categories.find((category) => category.id === parentCategoryId);

    if (!categoryItem) return cart;

    const menuItem = findItemItem(categoryItem.data, itemId);
    if (!menuItem) return cart;

    const selectedVariant = findItemVariant(menuItem, variantId);
    if (!selectedVariant) return cart;

    const { name, ingredients, image } = menuItem;

    const preparedItem = {
      cartItemId,
      itemId,
      name,
      ingredients,
      image,
      selectedVariant,
      quantity,
      additionalIngredients,
      parentCategoryId,
    };

    cart.push(preparedItem);
    return cart;
  }, []);
};

export const getCartFromLocalStorage = (menuData: MenuDataType) => {
  const localStorageItemJSON = localStorage.getItem('cart');

  if (!localStorageItemJSON) return;
  const localStorageItem = JSON.parse(localStorageItemJSON);
  return prepareCartItemsToSetInGlobalState(menuData, localStorageItem);
};
