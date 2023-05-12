import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import React from "react";
import ContactListItem from "../components/contactlistitem";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";
const ContactsScreen = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then((result) => {
      setUser(result.data?.listUsers?.items);
    });
  }, []);

  return (
    <FlatList
      data={user}
      renderItem={({ item }) => <ContactListItem user={item} />}
      style={{ backgroundColor: "white" }}
    />
  );
};

export default ContactsScreen;
