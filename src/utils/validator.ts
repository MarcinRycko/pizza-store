class Validator {
  private value: string = '';
  private key: string = '';

  toCheck = (value: string, key: string) => {
    this.value = value;
    this.key = key;

    return this;
  };

  isNotEmpty = () => {
    if (this.value.length <= 0) {
      throw new Error(`${this.key} cannot be empty`);
    }
    return this;
  };

  isEveryCharLetter = () => {
    const regexp = new RegExp('^[A-Za-z]*$', 'g');

    if (!regexp.test(this.value)) {
      throw new Error(`${this.key} can only contain letters`);
    }

    return this;
  };

  isNotToLong = (maxLength: number) => {
    if (this.value.length > maxLength) {
      throw new Error(`${this.key} can contain max ${maxLength} characters`);
    }
    return this;
  };

  isLongEnough = (minLength: number) => {
    if (this.value.length < minLength) {
      throw new Error(
        `${this.key} must contain minimum ${minLength} characters`
      );
    }
    return this;
  };

  isEveryCharNumber = () => {
    const regexp = new RegExp('^[0-9]*$', 'g');
    if (!regexp.test(this.value)) {
      throw new Error(`${this.key} can only contain numbers`);
    }

    return this;
  };

  isEmail = () => {
    const regexp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!regexp.test(this.value)) {
      throw new Error(`${this.key} must be a valid`);
    }

    return this;
  };

  hasExactAmountOfLetters = (exactLength: number) => {
    if (this.value.length !== exactLength) {
      throw new Error(`${this.key} must have ${exactLength} characters`);
    }

    return this;
  };

  clean = () => {
    return this;
  };

  isCardExpirationDate = () => {
    const regexp = new RegExp(/^(?:0[0-9]|1[0-2])[0-9]{2}$/);

    if (!regexp.test(this.value)) {
      throw new Error(`${this.key} must be a valid`);
    }

    return this;
  };

  isPaymentMethod = () => {
    const availablePaymentMethods = [
      'creditCardNow',
      'cashOnDelivery',
      'cardOnDelivery',
    ];
    const isSelectedAvailableMethod = availablePaymentMethods.some((el) => {
      return el === this.value;
    });
    if (!isSelectedAvailableMethod) {
      throw new Error(
        `Please select a payment method before proceeding to order.`
      );
    }

    return this;
  };
}

export const validator = new Validator();
