import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 10,
    marginLeft: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: Colors.gray,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 20,
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.black,
  },
  activeButtonText: {
    color: Colors.white,
  },
});

export default styles;
