import { useFillingInput, useToggler, useValidation } from '../../../hooks';
import { newsletterValidator } from './utils';
import { newsletterInitialState } from './newsletterInitailState';
import { prepareStateToPost } from '../../../utils/prepareStateToPost';

export const useNewsletter = () => {
  const { isActive: isSended, setActive: setMessageIsSended } = useToggler();

  const { state, setState, handleInputChange, restoreInitialState } =
    useFillingInput(newsletterInitialState);

  const { validate } = useValidation(state, setState, newsletterValidator);

  const endpoint = '/';
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  };

  const preparedNewsletterData = () => {
    return { data: prepareStateToPost(state) };
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { hasFormErrors } = validate();
    if (!hasFormErrors) {
      if (!hasFormErrors) {
        const body = preparedNewsletterData();
        if (!body) return;
        const response = await fetch(endpoint, {
          ...requestOptions,
          body: JSON.stringify(body),
        });

        //Should be
        // if (response.status === 200) {
        // setMessageIsSended();
        // restoreInitialState();
        // }

        //But for correct demos website work is
        setMessageIsSended();
        restoreInitialState();
      }
    }
  };

  return { state, isSended, handleInputChange, handleSubmit };
};
