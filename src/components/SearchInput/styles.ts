import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    gap: 15,
    width: '100%',
  },
  inputContainer: {
    gap: 15,
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  activeInput: {
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  input: {
    width: '77%',
    fontSize: 15,
    alignItems: 'center',
    paddingVertical: 6,
  },
  endIcon: {
    position: 'absolute',
    right: -25,
    bottom: -10,
  },
});

export default styles;
