import { CouponProps } from './type';

const coupons: CouponProps[] = [
  {
    id: '1',
    discount: '50% Cashback',
    expiry: 'Expires in 2 days',
    voucherCode: 'CASH50X01',
  },
  {
    id: '2',
    discount: '15% Discount',
    expiry: 'Expires in 1 days',
    voucherCode: 'DISC15X02',
  },
  {
    id: '3',
    discount: '10% Cashback',
    expiry: 'Expires in 7 days',
    voucherCode: 'CASH10X03',
  },
  {
    id: '7',
    discount: 'Flat ₹1000 Off',
    expiry: 'Expires in 6 days',
    voucherCode: 'FLAT1KX07',
  },
  {
    id: '8',
    discount: 'Book 2 Nights, Get 1 Free',
    expiry: 'Expires in 1 day',
    voucherCode: 'FREE1NX08',
  },
  {
    id: '9',
    discount: '20% Off First Hotel Booking',
    expiry: 'Expires in 10 days',
    voucherCode: 'FIRST20X9',
  },
];

export default coupons;
