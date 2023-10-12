import { MenuCategoryType } from '../../../types/CommonTypes';

export type CategoriesNavigationProps = {
  categories: MenuCategoryType[];
  activeCategory: MenuCategoryType;
  handleSelectCategory: (item: MenuCategoryType) => void;
};
