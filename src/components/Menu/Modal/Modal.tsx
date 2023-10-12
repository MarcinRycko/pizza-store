import { useGlobalStateContext } from '../../../context/globalStateContext';
import { useMenuDataContext } from '../../../context/menuDataContext';
import ModalSizes from '../ModalSizes/ModalSizes';
import ModalButtons from '../ModalButtons/ModalButtons';
import ModalAdditionalIngredients from '../ModalAdditionalIngredients/ModalAdditionalIngredients';
import ModalHeading from '../ModalHeading/ModalHeading';
import { IoCloseSharp } from 'react-icons/io5';
import { useModalState } from './hooks';
import { ModalProps } from './types';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__backdrop,
  content,
  content__button,
  content__button__icon,
} = styles;

const Modal: React.FC<ModalProps> = ({
  closeModal,
  data,
  data: {
    id,
    name,
    ingredients,
    variants,
    image,
    additionalIngredientsAvailable,
  },
}) => {
  const {
    state: {
      addToCart,
      globalState: { currency },
    },
  } = useGlobalStateContext();

  const {
    menuData: { additionalIngredients },
  } = useMenuDataContext();

  const {
    modalPrice,
    cartItem,
    cartItem: { selectedVariant },
    increaseQuantity,
    decreaseQuantity,
    selectVariant,
    addIngredient,
    removeIngredient,
  } = useModalState(data, additionalIngredients);

  return (
    <>
      <div className={wrapper}>
        <div className={wrapper__backdrop} onClick={closeModal}></div>
        <div className={content}>
          <div className={content__button} onClick={closeModal}>
            <IoCloseSharp className={content__button__icon} />
          </div>
          <ModalHeading image={image} name={name} ingredients={ingredients} />
          {additionalIngredientsAvailable && (
            <ModalAdditionalIngredients
              additionalIngredientsForPizza={additionalIngredients}
              selectedVariant={selectedVariant}
              currency={currency}
              addIngredient={addIngredient}
              removeIngredient={removeIngredient}
              cartItem={cartItem}
            />
          )}
          <ModalSizes
            variants={variants}
            cartItem={cartItem}
            selectVariant={selectVariant}
            currency={currency}
          />
          <ModalButtons
            cartItem={cartItem}
            modalPrice={modalPrice}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            addToCart={addToCart}
            closeModal={closeModal}
            currency={currency}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
