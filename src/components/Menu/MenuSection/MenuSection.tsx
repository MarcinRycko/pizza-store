import MenuItem from '../MenuItem/MenuItem';
import { useMenuDataContext } from '../../../context/menuDataContext';
import CategoriesNavigation from '../CategoriesNavigation/CategoriesNavigation';
import styles from './styles.module.scss';
import { useMenu } from './hooks';

const {
  wrapper,
  wrapper__container,
  wrapper__container__title,
  wrapper__container__list,
} = styles;

const MenuSection: React.FC = () => {
  const {
    menuData: { categories },
  } = useMenuDataContext();

  const { activeCategory, handleSelectCategory } = useMenu(categories);

  return (
    <>
      <section className={wrapper}>
        <div className={wrapper__container}>
          <h1 className={wrapper__container__title}>{activeCategory.name}</h1>

          <CategoriesNavigation
            categories={categories}
            activeCategory={activeCategory}
            handleSelectCategory={handleSelectCategory}
          />
          <ul className={wrapper__container__list}>
            {activeCategory.data.map((el) => (
              <MenuItem data={el} key={el.id} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default MenuSection;
