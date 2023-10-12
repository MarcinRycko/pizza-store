export type ImageType = {
  src: string;
  alt: string;
};

export type VariantType = {
  size: string;
  price: number;
  variantId: string;
};

export type MenuItemType = {
  id: string;
  name: string;
  ingredients: string;
  image: ImageType;
  parentCategoryId: string;
  additionalIngredientsAvailable: boolean;
  variants: VariantType[];
};

export type AdditionalIngredientItemType = {
  id: string;
  name: string;
  variants: VariantType[];
};

export type MenuCategoryType = {
  id: string;
  name: string;
  data: MenuItemType[];
};

export type MenuDataType = {
  categories: MenuCategoryType[];
  additionalIngredients: AdditionalIngredientItemType[];
};

export type AdditionalIngredientCartItemType = {
  id: string;
  name: string;
  variant: VariantType;
};

export type CartItemType = {
  cartItemId: string;
  itemId: string;
  name: string;
  ingredients: string;
  image: ImageType;
  selectedVariant: VariantType;
  quantity: number;
  additionalIngredients: AdditionalIngredientCartItemType[];
  parentCategoryId: string;
};

export type GlobalStateType = {
  cart: CartItemType[];
  isCartEmpty: boolean;
  deliveryPrice: number;
  subtotalPrice: number;
  totalPrice: number;
  isSidebarCartOpen: boolean;
  freeDeliveryFrom: number;
  isFreeDelivery: boolean;
  currency: string;
};

export type GlobalStateWithMethodsType = {
  globalState: GlobalStateType;
  addToCart: (item: CartItemType) => void;
  deleteCartItem: (item: CartItemType) => void;
  increaseCartItemQuantity: (item: CartItemType) => void;
  decreaseCartItemQuantity: (item: CartItemType) => void;
  openSidebarCart: () => void;
  closeSidebarCart: () => void;
  clearCart: () => void;
};

export type FormFieldItemState = {
  value: string;
  errorMsg: string;
  isError: boolean;
};

export type FormStateType = Record<string, FormFieldItemState>;

export interface ReturnedObjectInterface {
  isError: boolean;
  errorMsg: string;
}

export type ValidatorType = Record<
  string,
  (val: string) => ReturnedObjectInterface
>;

export type GlobalVariablesType = {
  deliveryPrice: number;
  freeDeliveryFrom: number;
  currency: string;
  maxAdditionalIngredients: number;
};

export type GlobalStateContextType = {
  state: GlobalStateWithMethodsType;
};

export type GlobalVariablesContextType = {
  globalVariables: GlobalVariablesType;
};

export type MenuDataContextType = {
  menuData: MenuDataType;
};
