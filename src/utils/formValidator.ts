import { ReturnedObjectInterface } from '../types/CommonTypes';
import { validator } from './validator';

class FormValidator {
  static isNameValid = (name: string): ReturnedObjectInterface => {
    try {
      validator
        .toCheck(name, 'Name')
        .isNotEmpty()
        .isLongEnough(3)
        .isEveryCharLetter()
        .isNotToLong(20)
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isLastNameValid = (lastName: string): ReturnedObjectInterface => {
    try {
      validator
        .toCheck(lastName, 'Last Name')
        .isNotEmpty()
        .isLongEnough(3)
        .isEveryCharLetter()
        .isNotToLong(20)
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isStreetValid = (street: string): ReturnedObjectInterface => {
    try {
      validator
        .toCheck(street, 'Street')
        .isNotEmpty()
        .isLongEnough(3)
        .isNotToLong(30)
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isStreetLine2Valid = (street: string): ReturnedObjectInterface => {
    try {
      validator.toCheck(street, 'Street Line 2').clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isCityValid = (city: string): ReturnedObjectInterface => {
    try {
      validator
        .toCheck(city, 'City')
        .isNotEmpty()
        .isLongEnough(3)
        .isNotToLong(15)
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isZipCodeValid = (zipCode: string): ReturnedObjectInterface => {
    const zipCodeWithoutSpecialSign = zipCode.replace(/-/g, '');
    try {
      validator
        .toCheck(zipCodeWithoutSpecialSign, 'Zip Code')
        .isNotEmpty()
        .hasExactAmountOfLetters(5)
        .isEveryCharNumber()
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isEmailValid = (email: string): ReturnedObjectInterface => {
    try {
      validator.toCheck(email, 'Email').isNotEmpty().isEmail().clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isPhoneNumberValid = (
    phoneNumber: string
  ): ReturnedObjectInterface => {
    const phoneNumberWithoutSpecialSign = phoneNumber.replace(/-/g, '');
    try {
      validator
        .toCheck(phoneNumberWithoutSpecialSign, 'Phone number')
        .isNotEmpty()
        .hasExactAmountOfLetters(9)
        .isEveryCharNumber()
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isSubjectValid = (subject: string): ReturnedObjectInterface => {
    try {
      validator
        .toCheck(subject, 'Subject')
        .isNotEmpty()
        .isEveryCharLetter()
        .isLongEnough(5)
        .isNotToLong(30)
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isMessageValid = (message: string): ReturnedObjectInterface => {
    try {
      validator
        .toCheck(message, 'Message')
        .isNotEmpty()
        .isLongEnough(10)
        .isNotToLong(200)
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isCreditCardNumberValid = (
    creditCardNumber: string
  ): ReturnedObjectInterface => {
    const creditCardNumberWithoutWhiteSpaces = creditCardNumber.replace(
      /\s/g,
      ''
    );
    try {
      validator
        .toCheck(creditCardNumberWithoutWhiteSpaces, 'Credit card number')
        .isNotEmpty()
        .isEveryCharNumber()
        .hasExactAmountOfLetters(16)
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isCardholderNameValid = (
    cardholderName: string
  ): ReturnedObjectInterface => {
    const cardholderNameWithoutWhiteSpaces = cardholderName.replace(/\s/g, '');
    try {
      validator
        .toCheck(cardholderNameWithoutWhiteSpaces, 'Cardholder name')
        .isNotEmpty()
        .isEveryCharLetter()
        .isLongEnough(5)
        .isNotToLong(20)
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isExpirationDateValid = (
    expirationDate: string
  ): ReturnedObjectInterface => {
    const expirationDateWithoutSpecialSign = expirationDate.replace(/\//g, '');
    try {
      validator
        .toCheck(expirationDateWithoutSpecialSign, 'Expiration date')
        .isNotEmpty()
        .isEveryCharNumber()
        .hasExactAmountOfLetters(4)
        .isCardExpirationDate()
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isCcvValid = (cardholderName: string): ReturnedObjectInterface => {
    try {
      validator
        .toCheck(cardholderName, 'ccv')
        .isNotEmpty()
        .isEveryCharNumber()
        .hasExactAmountOfLetters(3)
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };

  static isPaymentMethodValid = (
    paymentMethod: string
  ): ReturnedObjectInterface => {
    try {
      validator
        .toCheck(paymentMethod, 'paymentMethod')
        .isPaymentMethod()
        .clean();
      return { isError: false, errorMsg: '' };
    } catch (error) {
      if (error instanceof Error)
        return { isError: true, errorMsg: error.message };
      else return { isError: true, errorMsg: 'Unknown error' };
    }
  };
}

export default FormValidator;
