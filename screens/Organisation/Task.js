import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function Tasks({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 30 }}>Tasks</Text>
    </ScrollView>
  );
}
export default function Task() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: Colors.WHITE,
        // },
        // headerTitleStyle: { color: Colors.tintColor },
        // headerTintColor: Colors.tintColor,
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={{ title: "", headerBackTitle: "Retour" }}
      />
      {/* <Stack.Screen
          name="AddEvent"
          component={AddEvenement}
          options={{ title: "inscription", headerBackTitle: "Retour" }}
        /> */}
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DODGER_BLUE,
  },
  title: {
    paddingTop: 50,
    paddingBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.tintColor,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
  },
  Button: {
    width: 160,
    borderRadius: 15,
    marginTop: 40,
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
    paddingTop: 3,
    paddingBottom: 2,
    paddingLeft: 10,
    shadowColor: "#0A369D",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: "normal",
    color: Colors.tintColor,
  },
});
