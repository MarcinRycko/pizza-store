import { ModalButtonsProps } from './types';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__quantity,
  wrapper__quantity__btn,
  wrapper__quantity__counter,
  wrapper__addBtn,
} = styles;

const ModalButtons: React.FC<ModalButtonsProps> = ({
  cartItem,
  cartItem: { quantity },
  modalPrice,
  increaseQuantity,
  decreaseQuantity,
  addToCart,
  closeModal,
  currency,
}) => {
  const handleAddToCart = () => {
    addToCart(cartItem);
    closeModal();
  };

  return (
    <>
      <div className={wrapper}>
        <div className={wrapper__quantity}>
          <button className={wrapper__quantity__btn} onClick={decreaseQuantity}>
            -
          </button>
          <span className={wrapper__quantity__counter}>{quantity}</span>
          <button className={wrapper__quantity__btn} onClick={increaseQuantity}>
            +
          </button>
        </div>
        <button className={wrapper__addBtn} onClick={handleAddToCart}>
          <span>Add to cart</span>
          <span>
            + {modalPrice}
            {currency}
          </span>
        </button>
      </div>
    </>
  );
};

export default ModalButtons;
