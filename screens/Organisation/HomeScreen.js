import * as React from "react";
import EventDetait from "../../components/EventDetait";
import TimeLine from "../../components/TimeLine";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../../constants/Colors";
import Notification from "../../components/Notification";
const Stack = createStackNavigator();
export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TimeLine}
        options={{
          title: "Accueil",
          headerStyle: {
            backgroundColor: Colors.WHITE,
          },
          headerTintColor: Colors.tintColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="EventDetait"
        component={EventDetait}
        options={{
          title: "Evenement Description",
          headerStyle: {
            backgroundColor: Colors.WHITE,
          },
          headerTintColor: Colors.tintColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitle:"Retour",
        }}
      />
         <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "Notification",
          headerStyle: {
            backgroundColor: Colors.WHITE,
          },
          headerTintColor: Colors.tintColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitle:"Retour",
        }}
      />
    </Stack.Navigator>
  );
}
