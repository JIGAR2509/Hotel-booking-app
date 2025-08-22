import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  labelContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: 120,
    backgroundColor: Colors.white,
    padding: 10,
    elevation: 5,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.77,
    borderRadius: 20,
    gap: 10,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  sideConatiner: {
    justifyContent: 'space-evenly',
    gap: 20,
  },
  textContainer: {
    gap: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 17,
    color: Colors.secondary,
  },
  bottomContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  innerContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  price: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: '900',
  },
  perNight: {
    fontSize: 12,
    color: Colors.secondary,
    fontWeight: '500',
  },
  rating: {
    fontSize: 12,
    color: Colors.black,
    fontWeight: 'bold',
  },
  reviewCount: {
    fontSize: 12,
    color: Colors.secondary,
    fontWeight: '500',
  },
});

export default styles;
