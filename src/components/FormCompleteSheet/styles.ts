import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    height: 270,
    width: '80%',
  },
  text: {
    fontSize: 27,
    fontWeight: 800,
  },
  description: {
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 15,
    color: Colors.secondary,
    fontWeight: 500,
  },
  innerConatiner: {
    padding: 5,
    marginTop: 15,
    gap: 20,
    alignItems: 'center',
  },
  button: { width: '70%' },
  sheetButton: {
    marginVertical: 30,
    alignItems: 'center',
  },
});

export default styles;
