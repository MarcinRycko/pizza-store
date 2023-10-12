import { CartItemType } from '../../../types/CommonTypes';

export type ModalButtonsProps = {
  cartItem: CartItemType;
  modalPrice: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  addToCart: (item: CartItemType) => void;
  closeModal: () => void;
  currency: string;
};
