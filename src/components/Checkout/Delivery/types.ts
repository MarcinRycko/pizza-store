import { FormStateType } from '../../../types/CommonTypes';

export type DeliveryProps = {
  deliveryState: FormStateType;
  handleDeliveryInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
