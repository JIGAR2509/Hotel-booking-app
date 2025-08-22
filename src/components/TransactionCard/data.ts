import { BookingTransactionProps } from './types';

const bookingTransactions: BookingTransactionProps[] = [
  {
    hotelId: 1,
    hotelName: 'Diamond Heart Hotel',
    date: '28 Mar 2022, Thu',
    guests: 4,
    rooms: 2,
    totalPrice: 274,
    status: 'Waiting',
    image: require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/diamondhotel.jpg'),
  },
  {
    hotelId: 2,
    hotelName: 'Radisson Blue',
    date: '22 Mar 2022, Thu',
    guests: 2,
    rooms: 1,
    totalPrice: 184,
    status: 'Finished',
    image: require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/radisonblue.jpg'),
  },
  {
    hotelId: 3,
    hotelName: 'Alpine Glow Lodge',
    date: '10 Mar 2022, Fri',
    guests: 2,
    rooms: 1,
    totalPrice: 190,
    status: 'Finished',
    image: require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/alpineglowlodge.webp'),
  },
  {
    hotelId: 4,
    hotelName: 'Lakeview Apartment',
    date: '04 Mar 2022, Fri',
    guests: 1,
    rooms: 1,
    totalPrice: 180,
    status: 'Finished',
    image: require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/lakeviewappartment.jpg'),
  },
  {
    hotelId: 5,
    hotelName: 'Ski Peak Resort',
    date: '02 Mar 2022, Wed',
    guests: 4,
    rooms: 2,
    totalPrice: 300,
    status: 'Finished',
    image: require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/skipeak.webp'),
  },
];

export default bookingTransactions;
