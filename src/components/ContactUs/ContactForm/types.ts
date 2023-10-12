import { FormStateType } from '../../../types/CommonTypes';

export type ContactFormProps = {
  state: FormStateType;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
};
