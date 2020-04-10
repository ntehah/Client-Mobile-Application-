import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/Volunteer/HomeScreen";
import NotificationScreen from "../screens/Volunteer/NotificationScreen";
import ProfilUser from "../screens/Volunteer/ProfilUser";
import Messages from "../screens/Volunteer/Messages";
const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigatorUser() {
  return (
    <BottomTab.Navigator headerMode="none" backBehavior="none">
      <BottomTab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="inbox" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="bell-o" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profil"
        component={ProfilUser}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="user" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
