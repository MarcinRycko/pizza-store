import FormValidator from '../../utils/formValidator';
import { ValidatorType } from '../../types/CommonTypes';

export const contactUsValidator: ValidatorType = {
  name: (name: string) => FormValidator.isNameValid(name),
  email: (email: string) => FormValidator.isEmailValid(email),
  subject: (subject: string) => FormValidator.isSubjectValid(subject),
  message: (message: string) => FormValidator.isMessageValid(message),
};
