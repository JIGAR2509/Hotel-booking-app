import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    gap: 20,
    flex: 1,
  },
  calenderContainer: {
    gap: 10,
  },
  innerContainer: {
    flex: 1,
  },
  calenderHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: '70%',
  },
  bottomContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  priceContainer: {
    alignItems: 'center',
  },
  price: {
    fontSize: 22,
    fontWeight: 800,
  },
  bottomText: {
    color: Colors.secondary,
  },
});

export default styles;
