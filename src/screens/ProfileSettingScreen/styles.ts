import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  profilePicture: {
    marginTop: 40,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 65,
  },
  header: {
    position: 'absolute',
    left: '38%',
  },
  icon: {
    height: 50,
    width: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: Colors.white,
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  input: { borderColor: Colors.secondary, borderWidth: 1 },
  inputContainer: {
    marginTop: 30,
    gap: 20,
  },
  button: {
    width: '70%',
  },

  buttonContainer: {
    flex: 1,
    paddingBottom: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 7,
  },
});

export default styles;
