import { FormFieldItemState } from '../../../types/CommonTypes';

export type TextareaFieldProps = {
  id: string;
  name: string;
  isRequired: boolean;
  data: FormFieldItemState;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
