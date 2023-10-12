import { useGlobalStateContext } from '../../../context/globalStateContext';
import { useCartItemPrice } from '../../../hooks';
import { MdDeleteForever } from 'react-icons/md';
import { CartItemProps } from './types';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__top,
  wrapper__image,
  content,
  content__title,
  content__property,
  content__property__label,
  content__property__text,
  content__property__currency,
  icon,
  icon__icon,
  ingredients,
  ingredients__title,
  ingredients__list,
  ingredients__list__item,
} = styles;

const CartItem: React.FC<CartItemProps> = ({
  item,
  item: {
    name,
    image,
    selectedVariant: { size, price },
    quantity,
    additionalIngredients,
  },
}) => {
  const {
    state: {
      deleteCartItem,
      globalState: { currency },
    },
  } = useGlobalStateContext();

  const { cartItemPrice } = useCartItemPrice(item);

  const handleDelete = () => {
    deleteCartItem(item);
  };

  return (
    <>
      <div className={wrapper}>
        <div className={wrapper__top}>
          <div className={wrapper__image}>
            <img {...image} />
          </div>
          <div className={content}>
            <h1 className={content__title}>{name}</h1>
            <div className={content__property}>
              <p className={content__property__label}>Size:</p>
              <p className={content__property__text}>{size}</p>
            </div>
            <div className={content__property}>
              <p className={content__property__label}>Quantity:</p>
              <p className={content__property__text}>{quantity}</p>
            </div>
            <div className={content__property}>
              <p className={content__property__label}>Price:</p>
              <p className={content__property__text}>{cartItemPrice}</p>
              <p className={content__property__currency}>{currency}</p>
            </div>
          </div>
          <div className={icon}>
            <MdDeleteForever className={icon__icon} onClick={handleDelete} />
          </div>
        </div>
        {additionalIngredients.length > 0 && (
          <div className={ingredients}>
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
