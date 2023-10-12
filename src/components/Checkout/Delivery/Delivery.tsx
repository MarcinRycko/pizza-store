import { DeliveryProps } from './types';
import InputField from '../../shared/InputField/InputField';
import styles from './styles.module.scss';

const { wrapper, wrapper__title, wrapper__form } = styles;

const Delivery: React.FC<DeliveryProps> = ({
  deliveryState: {
    name,
    lastName,
    street,
    streetLine2,
    city,
    zipCode,
    email,
    phoneNumber,
  },
  handleDeliveryInputChange,
}) => {
  return (
    <>
      <div className={wrapper}>
        <h1 className={wrapper__title}>Delivery address</h1>
        <form className={wrapper__form}>
          <InputField
            id="name"
            name="Name"
            isRequired
            data={name}
            handleInputChange={handleDeliveryInputChange}
          />
          <InputField
            id="lastName"
            name="Last name"
            isRequired
            data={lastName}
            handleInputChange={handleDeliveryInputChange}
          />
          <InputField
            id="street"
            name="Street"
            isRequired
            data={street}
            handleInputChange={handleDeliveryInputChange}
          />
          <InputField
            id="streetLine2"
            name="Street line 2"
            isRequired={false}
            data={streetLine2}
            handleInputChange={handleDeliveryInputChange}
          />
          <InputField
            id="city"
            name="City"
            isRequired
            data={city}
            handleInputChange={handleDeliveryInputChange}
          />
          <InputField
            id="zipCode"
            name="Zip code"
            isRequired
            mask="99-999"
            data={zipCode}
            handleInputChange={handleDeliveryInputChange}
          />
          <InputField
            id="email"
            name="Email address"
            isRequired
            data={email}
            handleInputChange={handleDeliveryInputChange}
          />
          <InputField
            id="phoneNumber"
            name="Phone number"
            isRequired
            mask="999-999-999"
            data={phoneNumber}
            handleInputChange={handleDeliveryInputChange}
          />
        </form>
      </div>
    </>
  );
};

export default Delivery;
