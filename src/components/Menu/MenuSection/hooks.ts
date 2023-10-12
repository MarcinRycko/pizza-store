import { useState } from 'react';
import { MenuCategoryType } from '../../../types/CommonTypes';

export const useMenu = (categories: MenuCategoryType[]) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleSelectCategory = (element: MenuCategoryType) => {
    setActiveCategory(element);
  };

  return { activeCategory, handleSelectCategory };
};
