import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'column',
  },
  photoContainer: {
    alignSelf: 'center',
    flexDirection: 'column',
    gap: 14,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 65,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    color: Colors.secondary,
    fontWeight: 500,
  },
  activityBox: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 100,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  activity: {
    flexDirection: 'column',
    gap: 5,
  },
  activityName: {
    fontSize: 16,
    fontWeight: 500,
    color: Colors.secondary,
    textAlign: 'center',
  },

  activityCount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  optionText: {
    marginVertical: 20,
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: 600,
    width: '90%',
  },
  optionContainer: {
    paddingBottom: 15,
    gap: 10,
    marginHorizontal: 20,
  },
});

export default styles;
