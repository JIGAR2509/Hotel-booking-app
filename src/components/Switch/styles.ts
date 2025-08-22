import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  description: {
    fontSize: 13,
    color: Colors.secondary,
  },
});

export default styles;
