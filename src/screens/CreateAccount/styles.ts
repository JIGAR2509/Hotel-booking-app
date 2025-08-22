import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 30,
    marginLeft: 25,
    gap: 15,
  },
  inputContainer: {
    marginTop: 30,
    gap: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 800,
  },
  welcomeDescription: {
    fontSize: 17,
    color: Colors.secondary,
    fontWeight: 500,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginVertical: 40,
    alignItems: 'center',
    gap: 9,
  },
  agreeButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: 25,
    width: 250,
    borderRadius: 14,
  },
  agreeButtonText: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: 16,
    fontWeight: 700,
  },

  viewButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 25,
    width: 250,
    borderRadius: 14,
    justifyContent: 'center',
  },
  viewButtonText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 16,
    fontWeight: 700,
  },
});

export default styles;
