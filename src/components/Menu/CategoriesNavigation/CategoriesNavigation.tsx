import { cx } from '../../../utils/cx';
import { CategoriesNavigationProps } from './types';
import styles from './styles.module.scss';

const { wrapper, wrapper__item, wrapper__item_active } = styles;

const CategoriesNavigation: React.FC<CategoriesNavigationProps> = ({
  categories,
  activeCategory,
  handleSelectCategory,
}) => {
  return (
    <>
      <ul className={wrapper}>
        {categories.map((item) => {
          return (
            <li
              key={item.id}
              className={cx(
                wrapper__item,
                activeCategory.name === item.name && wrapper__item_active
              )}
              onClick={() => handleSelectCategory(item)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoriesNavigation;
