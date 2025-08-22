import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  image: {
    height: 70,
    width: 70,
  },
  optionButton: {
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginTop: 15,
    paddingRight: 17,
    paddingHorizontal: 10,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  checkboxSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  addCard: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginTop: 20,
    paddingRight: 17,
    paddingHorizontal: 10,
    paddingVertical: 3,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  addCardText: {
    fontSize: 18,
    marginLeft: 10,
  },
  upperBox: {
    padding: 14,
    marginVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 15,
  },
  iconBox: {
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
});
export default styles;
