import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    gap: 10,
  },
  inputContainer: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  input: {
    width: '40%',
    fontSize: 18,
    alignItems: 'center',
    paddingVertical: 6,
  },
  inputInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 20,
    borderRadius: 20,
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
    fontWeight: 600,
  },
});
export default styles;
