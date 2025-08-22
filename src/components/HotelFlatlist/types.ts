import { ImageSourcePropType } from 'react-native';

export type HotelData = {
  id: number;
  name: string;
  location: string;
  image?: ImageSourcePropType;
  rating?: number;
  reviewCount?: number;
  description?: string;
  pricePerNight: any;
  beds?: number;
  wifi?: boolean;
  gym?: boolean;
  breakfast?: boolean;
};
