import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import LoginScreen from "../screens/LoginScreen"
import NotificationScreen from "../screens/NotificationScreen"
import Community from "../screens/Community"
import ProfilUser from "../screens/ProfilUser"

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

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
        name="tableau"
        component={Community}
        options={{
          tabBarLabel: "Message",
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
        name="profil"
        component={ProfilUser}
        options={{
          tabBarLabel: "profil",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="user" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

