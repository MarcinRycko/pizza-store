import { useGlobalStateContext } from '../../../context/globalStateContext';
import { useNavigate } from 'react-router-dom';
import { useFillingInput, useValidation } from '../../../hooks';
import { prepareStateToPost } from '../../../utils/prepareStateToPost';
import { v4 as uuidv4 } from 'uuid';
import {
  deliveryValidators,
  creditCardPaymentValidators,
  paymentMethodValidators,
} from './utility';
import {
  delivertInitialState,
  paymentMethodInitialState,
  creditCardPaymentInitialState,
} from './formsInitialStates';

export const useCheckoutForm = () => {
  const {
    state: {
      globalState: { cart, deliveryPrice, totalPrice },
      clearCart,
    },
  } = useGlobalStateContext();

  const navigate = useNavigate();

  const endpoint = '/';
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  };

  const {
    state: deliveryState,
    setState: setDeliveryState,
    handleInputChange: handleDeliveryInputChange,
    restoreInitialState: restoreDeliveryInitialState,
  } = useFillingInput(delivertInitialState);

  const {
    state: paymentMethodState,
    setState: setPaymentMethodState,
    handleInputChange: handlePaymentMethodChange,
    restoreInitialState: restorePaymentMethodInitialState,
  } = useFillingInput(paymentMethodInitialState);

  const {
    state: creditCardPaymentState,
    setState: setCreditCardPaymentState,
    handleInputChange: handleCreditCardPaymentInputChange,
    restoreInitialState: restoreCreditCardPaymentInitialState,
  } = useFillingInput(creditCardPaymentInitialState);

  const resotreStates = () => {
    restoreDeliveryInitialState();
    restorePaymentMethodInitialState();
    restoreCreditCardPaymentInitialState();
  };

  const { validate: deliveryValidate } = useValidation(
    deliveryState,
    setDeliveryState,
    deliveryValidators
  );
  const { validate: paymentMethodValidate } = useValidation(
    paymentMethodState,
    setPaymentMethodState,
    paymentMethodValidators
  );
  const { validate: creditCardPaymentValidate } = useValidation(
    creditCardPaymentState,
    setCreditCardPaymentState,
    creditCardPaymentValidators
  );

  const prepareOrderData = () => {
    return {
      orderId: uuidv4(),
      items: cart,
      deliveryPrice,
      totalPrice,
      deliveryData: prepareStateToPost(deliveryState),
      paymentMethodData: prepareStateToPost(paymentMethodState),
    };
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { hasFormErrors: hasDeliveryFormErrors } = deliveryValidate();
    const { hasFormErrors: hasPaymentMethodErrors } = paymentMethodValidate();
    const hasCreditCardPaymentFormErrors =
      paymentMethodState.paymentMethod.value === 'creditCardNow'
        ? creditCardPaymentValidate().hasFormErrors
        : false;

    if (
      !hasDeliveryFormErrors &&
      !hasPaymentMethodErrors &&
      !hasCreditCardPaymentFormErrors
    ) {
      const body = prepareOrderData();
      if (!body) return;
      const response = await fetch(endpoint, {
        ...requestOptions,
        body: JSON.stringify(body),
      });

      //Should be
      // if (response.status === 200) {
      //   navigate('/ordersuccess');
      //   clearCart();
      // resotreStates();
      // }

      //But for correct demos website work is
      navigate('/ordersuccess');
      clearCart();
      resotreStates();
    }
  };

  return {
    deliveryData: { deliveryState, handleDeliveryInputChange },
    paymentMethodData: { paymentMethodState, handlePaymentMethodChange },
    creditCardPaymentData: {
      creditCardPaymentState,
      handleCreditCardPaymentInputChange,
    },
    handleSubmit,
  };
};
