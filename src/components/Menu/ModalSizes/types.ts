import { CartItemType, VariantType } from '../../../types/CommonTypes';

export type ModalSizesProps = {
  variants: VariantType[];
  cartItem: CartItemType;
  selectVariant: (variant: VariantType) => void;
  currency: string;
};
