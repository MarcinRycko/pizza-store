import { ReactElement } from 'react';
import { GiFullPizza, GiHamburger, GiWaterBottle } from 'react-icons/gi';
import { MdDinnerDining } from 'react-icons/md';

export const chooseIcon = (parentId: string): ReactElement => {
  switch (parentId) {
    case 'pizza':
      return <GiFullPizza />;
    case 'burger':
      return <GiHamburger />;
    case 'pasta':
      return <MdDinnerDining />;
    case 'drinks':
      return <GiWaterBottle />;
    default:
      return <GiFullPizza />;
  }
};
