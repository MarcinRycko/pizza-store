import FormValidator from '../../../utils/formValidator';
import { ValidatorType } from '../../../types/CommonTypes';

export const newsletterValidator: ValidatorType = {
  email: (email: string) => FormValidator.isEmailValid(email),
};
