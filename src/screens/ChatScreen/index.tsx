/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { HomescreenParams } from '../../navigation/types';
import styles from './styles';
import BackButton from '../../components/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListDots } from '@fortawesome/free-solid-svg-icons/faListDots';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Colors from '../../utils/Colors/colors';
import HotelLabel from '../../components/HotelLabel';
import messageData from './data';
import { faLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  faImage,
  faLocationDot,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import { MessageDataProps } from './type';
import Layout from '../../components/Layout';
import { en } from '../../translations/en';

const ChatScreen = () => {
  const [messages, setMessages] = useState(messageData);
  const [value, setValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const route = useRoute<RouteProp<HomescreenParams, 'chatScreen'>>();
  const { item } = route.params;
  const navigation = useNavigation<NavigationProp<HomescreenParams>>();

  const sendHandler = () => {
    if (value.trim().length > 0) {
      const newMessage: MessageDataProps = {
        id: Math.random(),
        text: value,
        time: Date.now(),
        type: 'Send',
      };
      setMessages([...messages, newMessage]);
      setValue('');
    }
  };

  const receiveHandler = () => {
    if (value.trim().length > 0) {
      const newMessage: MessageDataProps = {
        id: Math.random(),
        text: value,
        time: Date.now(),
        type: 'Receive',
      };
      setMessages([...messages, newMessage]);
      setValue('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -20 : -10}
    >
      <Layout scrollable stickyHeaderIndices={[0]}>
        <View>
          <View style={styles.header}>
            <View style={styles.headerInfo}>
              <View style={styles.profileInfo}>
                <BackButton onPress={() => navigation.goBack()} />
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.profilePhoto}
                />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.status}>{item.status}</Text>
                {item.status === 'Online' && <Text style={styles.onlineDot} />}
              </View>
            </View>
            <TouchableOpacity style={styles.endButton}>
              <FontAwesomeIcon
                icon={faListDots as IconProp}
                size={25}
                color={Colors.black}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.label}>
          <HotelLabel
            item={{
              id: 1,
              name: 'Diamond Heart Hotel',
              location: 'Austrian Alps',
              image: require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/diamondhotel.jpg'),
              rating: 4.6,
              reviewCount: 142,
              description:
                'Diamond Heart Hotel is high rated hotels in Middle Java Purwokerto with 120+ reviews and have high attitude service...',
              pricePerNight: '$250',
              beds: 2,
            }}
            disabled
          />
        </View>
        {messages.map(message => {
          const current = new Date(message.time);
          const time = current.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });
          return (
            <View key={message.id} style={styles.chatContainer}>
              <View
                style={[
                  message.type === 'Send'
                    ? styles.sendMessageBox
                    : styles.receiveMessageBox,
                  message.type === 'Send'
                    ? { alignSelf: 'flex-end' }
                    : { alignSelf: 'flex-start' },
                ]}
              >
                <Text
                  style={[
                    message.type === 'Send'
                      ? styles.sendMessage
                      : styles.receiveMessage,
                  ]}
                >
                  {message.text}
                </Text>
              </View>
              <View
                style={
                  message.type === 'Send'
                    ? { alignSelf: 'flex-end' }
                    : { alignSelf: 'flex-start' }
                }
              >
                <Text style={styles.time}>{time}</Text>
              </View>
            </View>
          );
        })}
      </Layout>

      <View style={styles.bottom}>
        <View
          style={[
            styles.inputContainer,
            value.length > 0 && styles.inputContainerActive,
          ]}
        >
          <View style={styles.leftSide}>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <FontAwesomeIcon
                icon={faLink as IconProp}
                size={25}
                color={isVisible ? Colors.primary : Colors.secondary}
              />
            </TouchableOpacity>
            <TextInput
              value={value}
              onChangeText={setValue}
              placeholder={en.message.writeReply}
              placeholderTextColor={Colors.secondary}
              returnKeyLabel="return"
              style={styles.input}
            />
          </View>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendHandler}
            onLongPress={receiveHandler}
          >
            <FontAwesomeIcon
              icon={faPaperPlane as IconProp}
              size={25}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
        {isVisible && (
          <View style={styles.attachmentContainer}>
            <View style={styles.attachments}>
              <FontAwesomeIcon
                icon={faImage as IconProp}
                size={20}
                color={Colors.white}
              />
              <View style={styles.line} />
              <FontAwesomeIcon
                icon={faLocationDot as IconProp}
                size={20}
                color={Colors.white}
              />
              <View style={styles.line} />
              <FontAwesomeIcon
                icon={faFileLines as IconProp}
                size={20}
                color={Colors.white}
              />
            </View>
            <View style={styles.triangle} />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
