import { View, Text, FlatList } from 'react-native'
import React from 'react';
import chats from '../../assets/data/chats.json';
import ContactListItem from '../components/contactlistitem';

const ContactsScreen = () => {
  return (
    <FlatList 
      data={chats}
      renderItem={({item}) => 
        <ContactListItem user={item.user} />
      }
      style ={{backgroundColor: 'white'}}
    />
  )
}

export default ContactsScreen