import { FormFieldItemState } from '../../../types/CommonTypes';

export type InputFieldProps = {
  id: string;
  name: string;
  isRequired: boolean;
  data: FormFieldItemState;
  mask?: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
