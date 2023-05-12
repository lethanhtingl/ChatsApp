import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { useEffect } from "react";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  useEffect(() => {
    const syncUser = async () => {
      //GET AUTH USER
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      console.log(authUser);
      // QUERY THE DATABASE USING AUTH SUER ID (SUB)
      const userData = await API.graphql(graphqlOperation(getUser), {
        id: authUser.attributes.sub,
      });
      console.log(userData);

      if (userData.data.getUser) {
        console.log("User already exists in DB");
        return;
      }
      //IF THERE IS NO USERS IN DB, CREATE ONE
      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.attributes.phone_number,
        status: "I am using ChatsApp",
      };

      const newUserResponse = await API.graphql(
        graphqlOperation(createUser, { input: newUser })
      );
    };

    syncUser();
  }, []);

  return (
    <View style={styles.container}>
      <Navigator />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    marginTop: -30,
    marginBottom: -40,
  },
});

export default withAuthenticator(App);
