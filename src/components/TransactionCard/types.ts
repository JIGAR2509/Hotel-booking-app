import { ImageSourcePropType } from 'react-native';

export type BookingTransactionProps = {
  hotelId: number;
  hotelName: string;
  date: string;
  guests: number;
  rooms: number;
  totalPrice: number;
  status: 'Waiting' | 'Finished';
  image: ImageSourcePropType;
};
