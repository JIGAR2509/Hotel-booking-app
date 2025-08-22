import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  headerInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  profilePhoto: {
    height: 53,
    width: 53,
    borderRadius: 30,
  },
  textContainer: {
    marginLeft: 10,
    gap: 10,
  },
  status: {
    fontSize: 14,
    color: Colors.secondary,
  },
  name: {
    fontSize: 16,
    fontWeight: 500,
  },
  onlineDot: {
    position: 'absolute',
    left: -27,
    top: -4,
    backgroundColor: '#17b97d',
    height: 15,
    width: 15,
    borderRadius: 7.5,
    borderWidth: 1.5,
    borderColor: Colors.white,
  },
  endButton: {
    right: 20,
    elevation: 1,
    shadowColor: Colors.black,
    shadowOpacity: 0.06,
    shadowOffset: { height: 2, width: 2 },
    alignItems: 'center',
    justifyContent: 'center',
    width: 47,
    height: 47,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
  profileInfo: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  label: {
    marginVertical: 25,
  },
  chatContainer: {
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  sendMessageBox: {
    maxWidth: '75%',
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  receiveMessageBox: {
    maxWidth: '75%',
    backgroundColor: Colors.gray,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  sendMessage: {
    color: Colors.white,
    padding: 10,
    fontSize: 16,
    lineHeight: 22,
  },
  receiveMessage: {
    color: Colors.secondary,
    padding: 10,
    fontSize: 16,
    lineHeight: 22,
  },
  time: {
    marginTop: 10,
    fontSize: 14,
    color: Colors.secondary,
  },
  bottom: {
    backgroundColor: Colors.white,
  },
  inputContainer: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: Colors.gray,
    borderRadius: 40,
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 18,
    flexDirection: 'row',
    bottom: 30,
  },
  inputContainerActive: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  leftSide: {
    gap: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '65%',
    fontSize: 16,
  },
  sendButton: {
    left: 10,
    height: 54,
    width: 54,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  attachmentContainer: {
    alignItems: 'center',
  },
  attachments: {
    position: 'absolute',
    left: 20,
    bottom: 115,
    backgroundColor: Colors.primary,
    padding: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  line: {
    height: 1,
    width: 20,
    backgroundColor: Colors.white,
    marginVertical: 10,
  },
  triangle: {
    bottom: 105,
    left: 37,
    position: 'absolute',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.primary,
  },
});

export default styles;
