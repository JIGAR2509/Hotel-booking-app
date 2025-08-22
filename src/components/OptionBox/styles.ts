import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  box: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  leftElements: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  endText: {
    fontSize: 16,
    color: Colors.secondary,
  },
  rightElements: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  selected: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
});

export default styles;
