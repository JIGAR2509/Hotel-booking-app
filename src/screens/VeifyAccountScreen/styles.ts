import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 40,
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
    fontSize: 14,
  },
  numberContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  number: {
    fontWeight: 500,
    color: Colors.primary,
    fontSize: 16,
  },
  inputContainer: {
    marginLeft: 8,
    marginTop: 30,
  },
  button: {
    width: '70%',
  },
  bottomContainer: {
    gap: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
});

export default styles;
