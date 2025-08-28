import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 28,
    borderRadius: 14,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 16,
    fontWeight: 700,
  },
});

export default styles;
