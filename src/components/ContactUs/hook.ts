import { contactUsInitialState } from './formInitialState';
import { contactUsValidator } from './utility';
import { prepareStateToPost } from '../../utils/prepareStateToPost';
import { v4 as uuidv4 } from 'uuid';

import {
  useDisableBodyScrolling,
  useFillingInput,
  useToggler,
  useValidation,
} from '../../hooks';

export const useContactForm = () => {
  const {
    isActive: isFormSubmitted,
    setActive: setFormIsSubmitted,
    setDisabled: setCloseFormSubmittedModal,
  } = useToggler();

  useDisableBodyScrolling(isFormSubmitted);

  const { state, setState, handleInputChange, restoreInitialState } =
    useFillingInput(contactUsInitialState);

  const { validate } = useValidation(state, setState, contactUsValidator);

  const endpoint = '/';
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  };

  const preparedContactUsData = () => {
    return { messageId: uuidv4(), data: prepareStateToPost(state) };
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { hasFormErrors } = validate();

    if (!hasFormErrors) {
      const body = preparedContactUsData();
      if (!body) return;
      const response = await fetch(endpoint, {
        ...requestOptions,
        body: JSON.stringify(body),
      });

      //Should be
      // if (response.status === 200) {
      //  setFormIsSubmitted();
      // restoreInitialState();
      // }

      //But for correct demos website work is
      setFormIsSubmitted();
      restoreInitialState();
    }
  };

  const handleCloseModal = () => {
    setCloseFormSubmittedModal();
  };

  return {
    formData: { state, handleInputChange, handleSubmit },
    isFormSubmitted,
    handleCloseModal,
  };
};
