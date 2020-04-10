import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  EvilIcons,
  AntDesign,
} from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import ContactCart from "../../components/ContactCart";
import ContactDetail from "../../components/ContactDetail";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class Community extends React.Component {
  OnClickContact = () => {
    this.props.navigation.navigate("ContactDetail");
  };
  render() {
    return (
       <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.tintColor,
      },
      headerTitleStyle: { color: Colors.WHITE },
      headerTintColor: Colors.WHITE,
    }}
    >
      <Stack.Screen name="ContactDetail" component={ContactDetail} />
    </Stack.Navigator>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    height: "83%",
  },
  contentContainer: {
    paddingTop: 1,
  },
  inputHeader: {
    justifyContent: "flex-end",
    alignItems: "center",
    height: "15%",
    backgroundColor: "#fafafa",
    paddingBottom: 10,
  },
  TextInput: {
    alignItems: "center",
    borderWidth: 0.3,
    borderRadius: 15,
    borderColor: Colors.tintColor,
    width: "90%",
    height: 35,
    flexDirection: "row",
  },
  Input: {
    width: "100%",
    height: "100%",
  },
  prochain: {
    marginTop: 10,
    marginBottom: 10,
    height: 220,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 30,
    backgroundColor: "#fafafa",
    // paddingRight: "5%",
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 15,
  },
  iconClose: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    paddingTop: 2,
    paddingLeft: 10,
  },
});
