import FormValidator from '../../../utils/formValidator';
import { ValidatorType } from '../../../types/CommonTypes';

export const deliveryValidators: ValidatorType = {
  name: (name: string) => FormValidator.isNameValid(name),
  lastName: (surname: string) => FormValidator.isLastNameValid(surname),
  street: (street: string) => FormValidator.isStreetValid(street),
  streetLine2: (streetLine2: string) =>
    FormValidator.isStreetLine2Valid(streetLine2),
  city: (city: string) => FormValidator.isStreetValid(city),
  zipCode: (zipCode: string) => FormValidator.isStreetValid(zipCode),
  email: (email: string) => FormValidator.isEmailValid(email),
  phoneNumber: (phoneNumber: string) =>
    FormValidator.isPhoneNumberValid(phoneNumber),
};

export const creditCardPaymentValidators: ValidatorType = {
  cardNumber: (cardNumber: string) =>
    FormValidator.isCreditCardNumberValid(cardNumber),
  cardholderName: (cardholderName: string) =>
    FormValidator.isCardholderNameValid(cardholderName),
  expirationDate: (expirationDate: string) =>
    FormValidator.isExpirationDateValid(expirationDate),
  ccv: (ccv: string) => FormValidator.isCcvValid(ccv),
};

export const paymentMethodValidators: ValidatorType = {
  paymentMethod: (paymentMethod: string) =>
    FormValidator.isPaymentMethodValid(paymentMethod),
};
