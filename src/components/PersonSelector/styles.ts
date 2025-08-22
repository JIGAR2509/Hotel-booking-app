import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  condition: {
    fontSize: 15,
    color: Colors.secondary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 100,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 20,
  },
  count: {
    fontSize: 17,
  },
});

export default styles;
