import { useGlobalStateContext } from '../../../context/globalStateContext';
import { useCartItemPrice } from '../../../hooks';
import { MdDeleteForever } from 'react-icons/md';
import { CartItemProps } from './types';
import { cx } from '../../../utils/cx';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__top,
  wrapper__image,
  content,
  content__top,
  content__top__title,
  content__top__item,
  content__top__item__text,
  content__top__item__label,
  content__top__item__currency,
  ingredients,
  ingredients__mobile,
  ingredients__desktop,
  ingredients__title,
  ingredients__list,
  ingredients__list__item,
  icon,
  icon__icon,
  quantityData,
  quantityData__button,
  quantityData__counter,
} = styles;

const CartItem: React.FC<CartItemProps> = ({
  item,
  item: {
    name,
    image,
    selectedVariant: { size },
    quantity,
    additionalIngredients,
  },
}) => {
  const {
    state: {
      deleteCartItem,
      increaseCartItemQuantity,
      decreaseCartItemQuantity,
      globalState: { currency },
    },
  } = useGlobalStateContext();

  const handleDelete = () => {
    deleteCartItem(item);
  };

  const handleIcrease = () => {
    increaseCartItemQuantity(item);
  };

  const handleDecrease = () => {
    decreaseCartItemQuantity(item);
  };

  const { cartItemPrice } = useCartItemPrice(item);

  return (
    <>
      <div className={wrapper}>
        <div className={wrapper__top}>
          <div className={wrapper__image}>
            <img {...image} />
          </div>
          <div className={content}>
            <div className={content__top}>
              <h1 className={content__top__title}>{name}</h1>
              <div className={content__top__item}>
                <p className={content__top__item__label}>Size:</p>
                <p className={content__top__item__text}>{size}</p>
              </div>
              <div className={content__top__item}>
                <p className={content__top__item__label}>Price:</p>
                <p className={content__top__item__text}>{cartItemPrice}</p>
                <p className={content__top__item__currency}>{currency}</p>
              </div>
            </div>
            {additionalIngredients.length > 0 && (
              <div className={cx(ingredients, ingredients__desktop)}>
                <p className={ingredients__title}>Additional ingredients:</p>
                <ul className={ingredients__list}>
                  {additionalIngredients.map((el) => {
                    return (
                      <li key={el.id} className={ingredients__list__item}>
                        {el.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className={quantityData}>
            <button className={quantityData__button} onClick={handleDecrease}>
              -
            </button>
            <span className={quantityData__counter}>{quantity}</span>
            <button className={quantityData__button} onClick={handleIcrease}>
              +
            </button>
          </div>
          <div className={icon}>
            <MdDeleteForever className={icon__icon} onClick={handleDelete} />
          </div>
        </div>
        {additionalIngredients.length > 0 && (
          <div className={cx(ingredients, ingredients__mobile)}>
            <p className={ingredients__title}>Additional ingredients:</p>
            <ul className={ingredients__list}>
              {additionalIngredients.map((el) => {
                return (
                  <li key={el.id} className={ingredients__list__item}>
                    {el.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default CartItem;
