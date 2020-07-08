import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ModifierProfile from "./ModifierProfile"
import ProfilUser from "./ProfilUser";
const Stack = createStackNavigator();


export default function ProfileScreen() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="Profile"
          component={ProfilUser}
          options={{ title: "Profile", headerBackTitle: "Retour" }}
        />
        <Stack.Screen
            name="ModifierProfile"
            component={ModifierProfile}
            options={{ title: "Modifier Profile", headerBackTitle: "Retour" }}
          />
      </Stack.Navigator>
    );
  }