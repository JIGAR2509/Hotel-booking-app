import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 30,
    marginLeft: 25,
    gap: 15,
  },
  text: {
    fontSize: 26,
    fontWeight: 700,
  },
  description: {
    color: Colors.secondary,
    fontWeight: 500,
  },
  inputContainer: {
    marginTop: 40,
    marginHorizontal: 5,
    gap: 20,
  },

  bottomContainer: {
    width: '100%',
    bottom: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '70%',
  },
});

export default styles;
