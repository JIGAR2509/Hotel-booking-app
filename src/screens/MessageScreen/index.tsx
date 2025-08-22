import { FlatList, Image, Text, View } from 'react-native';
import React, { useState } from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './styles';
import SearchInput from '../../components/SearchInput';
import { messagesData } from '../../components/Messages/data';
import SeperatorLine from '../../components/SeperatorLine';
import { faBell } from '@fortawesome/free-regular-svg-icons/faBell';
import { Routes } from '../../navigation/routes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Messages from '../../components/Messages';
import Layout from '../../components/Layout';
import { HomescreenParams } from '../../navigation/types';
import { en } from '../../translations/en';

const MessageScreen = () => {
  const [messages, setMessages] = useState('');
  const [filteredMessages, setfilteredMessages] = useState(messagesData);
  const navigation = useNavigation<NavigationProp<HomescreenParams>>();

  const messageSearchHandler = (text: string) => {
    setMessages(text);

    if (text.trim().length > 0) {
      const result = messagesData.filter(message =>
        message.name.toLowerCase().includes(text.toLowerCase()),
      );
      setfilteredMessages(result);
    } else {
      setfilteredMessages(messagesData);
    }
  };

  const renderSeperator = () => <SeperatorLine />;

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Image
        source={require('/Users/sky9two/Desktop/Project/HotelBooking/src/assets/images/message.png')}
        resizeMode="cover"
        style={styles.image}
      />

      <Text style={styles.title}>{en.message.noMessageHere}</Text>
      <Text style={styles.description}>{en.message.emptyDesc}</Text>
    </View>
  );

  return (
    <Layout safeAreaView edges={['top']}>
      <ScreenHeader
        title={en.common.messages}
        icon={faBell as IconProp}
        dot={true}
        onIconPress={() => navigation.navigate(Routes.notification)}
      />
      <View style={styles.header}>
        <SearchInput
          placeholder={en.message.searchOrStartNewChat}
          value={messages}
          onChangeText={messageSearchHandler}
          startIcon={faSearch as IconProp}
        />
      </View>
      <FlatList
        data={filteredMessages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Messages item={item} />}
        ItemSeparatorComponent={renderSeperator}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={styles.listContainer}
        bounces={false}
      />
    </Layout>
  );
};

export default MessageScreen;
