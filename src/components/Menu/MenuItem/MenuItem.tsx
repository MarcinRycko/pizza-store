import Modal from '../Modal/Modal';
import ModalPortal from '../../../portal/ModalPortal';
import { useModal } from './hook';
import { BiCartAdd } from 'react-icons/bi';
import { GiFullPizza } from 'react-icons/gi';
import { MenuItemProps } from './types';
import { useGlobalState } from '../../../hooks';
import styles from './styles.module.scss';
import { chooseIcon } from './utility';

const {
  wrapper,
  thumbnail,
  content,
  content__heading,
  content__heading__thumbnail,
  content__heading__title,
  content__heading__text,
  signature,
  signature__item,
  signature__item__size,
  signature__item__price,
  signature__cart,
  signature__cart__icon,
} = styles;

const MenuItem: React.FC<MenuItemProps> = ({
  data: { name, ingredients, variants, image, parentCategoryId },
  data,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const {
    globalState: { currency },
  } = useGlobalState();

  const Icon = chooseIcon(parentCategoryId);

  return (
    <>
      <li className={wrapper}>
        <div className={thumbnail}>
          <img {...image} />
        </div>
        <div className={content}>
          <div className={content__heading}>
            <div className={content__heading__thumbnail}>
              <img {...image} />
            </div>
            <h1 className={content__heading__title}>{name}</h1>
            <p className={content__heading__text}>{ingredients}</p>
          </div>
          <div className={signature}>
            {variants.map((el) => (
              <div className={signature__item} key={el.variantId}>
                {Icon}
                <span className={signature__item__size}>{el.size}</span>
                <span className={signature__item__price}>
                  {el.price}
                  {currency}
                </span>
              </div>
            ))}
            <div className={signature__cart}>
              <BiCartAdd
                className={signature__cart__icon}
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      </li>
      {isModalOpen && (
        <ModalPortal>
          {<Modal closeModal={closeModal} data={data} />}
        </ModalPortal>
      )}
    </>
  );
};

export default MenuItem;
