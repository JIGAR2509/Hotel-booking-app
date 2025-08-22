import { Platform, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  img: {
    height: 420,
    width: Platform.OS === 'ios' ? '100%' : 370,
    paddingHorizontal: 25,
    borderRadius: 40,
    marginTop: 20,
  },
  textContainer: {
    gap: 20,
    alignItems: 'center',
    padding: 27,
  },
  titleText: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: 800,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.secondary,
  },
});

export default styles;
