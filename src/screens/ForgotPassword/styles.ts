import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 35,
    marginLeft: 25,
    gap: 15,
  },
  verifyText: {
    fontSize: 30,
    fontWeight: 800,
  },
  verifyDescription: {
    color: Colors.secondary,
    fontWeight: 500,
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    width: '70%',
  },

  inputContainer: {
    marginTop: 40,
    marginHorizontal: 5,
    gap: 20,
  },
});

export default styles;
