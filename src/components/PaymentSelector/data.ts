import Icons from '../../utils/Icons/icons';
import { PaymentOptionProps } from './types';

const paymentOptions: PaymentOptionProps[] = [
  { key: 'mastercard', label: 'Master Card', icon: Icons.MasterCard },
  { key: 'visa', label: 'Visa', icon: Icons.Visa },
];

export default paymentOptions;
