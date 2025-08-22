import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  inputContainer: {
    gap: 15,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  input: {
    width: '77%',
    fontSize: 16,
    fontWeight: 500,
    alignItems: 'center',
    paddingVertical: 6,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  notFocusedInput: {
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  inputLabelText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 500,
  },
  endIcon: {
    position: 'absolute',
    right: -25,
    bottom: -10,
  },
  endText: {
    position: 'absolute',
    right: 10,
    color: Colors.secondary,
  },
});
export default styles;
