import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Colors from "../constants/Colors"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function LoginScreen() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.WHITE,
      },
      headerTitleStyle: { color: Colors.tintColor },
      headerTintColor: Colors.tintColor,
    }}
    >
      <Stack.Screen name="connexion" component={SignIn} />
      <Stack.Screen name="inscription" component={SignUp} />
    </Stack.Navigator>
  );
}
