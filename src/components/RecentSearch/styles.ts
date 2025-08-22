import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  textContainer: {
    gap: 5,
    width: '75%',
  },
  city: {
    fontSize: 16,
    fontWeight: 700,
  },
  hotels: {
    color: Colors.secondary,
  },
  icon: {
    marginHorizontal: 20,
  },
});

export default styles;
