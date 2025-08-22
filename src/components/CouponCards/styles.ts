import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    borderRadius: 20,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 5,
  },
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  activeBorder: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  textContainer: {
    gap: 8,
  },
  bottomContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 15,
  },
  discountText: {
    fontSize: 16,
    fontWeight: 700,
  },

  expiry: {
    fontWeight: 500,
    fontSize: 15,
    color: Colors.secondary,
  },
  extendedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voucherBox: {
    gap: 10,
  },
  codeText: {
    color: Colors.secondary,
    fontWeight: 500,
    fontSize: 15,
  },
  code: {
    fontSize: 16,
    fontWeight: 600,
  },
  button: {
    top: 6,
    paddingVertical: 8,
    width: 140,
  },
});

export default styles;
