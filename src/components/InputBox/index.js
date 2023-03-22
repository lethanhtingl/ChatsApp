import { View, Text, StyleSheet, TextInput } from 'react-native'
import {React, useState} from 'react';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';

const InputBox = () => {

    // State data
    const [newMessage, setNewMessage] = useState('haha');

    const onSend = () => {
        console.warn('Sending a new massage: ', newMessage);

        setNewMessage('');
    };

  return (
    <View style={styles.container}>
        {/* Icon */}
        <AntDesign name='plus' size={24} color='royalblue' />
        {/* TextInput */}
        <TextInput 
            value={newMessage} 
            onChangeText={setNewMessage} 
            style={styles.input} 
            placeholder='Type your massage...'
        />
        {/* Icon */}
        <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color='white'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        padding:5,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,

        borderRadius: 50,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 6,
        borderRadius: 15,
        overflow: 'hidden',
    }
});

export default InputBox;