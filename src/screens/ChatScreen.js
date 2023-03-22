import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Message from '../components/Message';
import messages from '../../assets/data/messages.json';
import bg from '../../assets/images/BG.png';

const ChatScreen = () => {
  return (
    <ImageBackground scoure={bg} style={styles.bg}>
        <FlatList
            data={messages}
            renderItem={({item}) => <Message message={item} />}
            style={styles.list}
            inverted
        />
    </ImageBackground>
  )
}

const styles = StyleSheet.create( {
    bg: {
        flex: 1,
        backgroundColor: 'gray'
    },
    list: {
        padding: 10,
    }
});

export default ChatScreen