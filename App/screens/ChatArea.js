import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { StyleSheet,StatusBar } from 'react-native';
import Color from '../Color';
import HeaderChat from '../components/HeaderChat';
const ChatScreen = ({navigation}) => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'John',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 2,
      text: 'Any ride available?',
      createdAt: new Date(),
      user: {
        _id: 3,
        name: 'Sarah',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 3,
      text: 'I need a ride?',
      createdAt: new Date(),
      user: {
        _id: 4,
        name: 'Kein',
        avatar:"https://placeimg.com/140/140/any",
      },
    },
  ]);

  const onSend = (newMessages = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
  };

  return (
    <>
    <HeaderChat navigate={navigation} />
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: 1,
        name: 'You',
        avatar: 'https://placeimg.com/140/140/any',
      }}
    />
    </>
  );
};

export default ChatScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    paddingTop: Platform.OS ==="android"&& StatusBar.currentHeight ,
  },
});
