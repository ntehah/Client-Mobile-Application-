import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../../components/TabBarIcon";
import HomeScreen from "../../screens/HomeScreen";
import NotificationScreen from "../../screens/NotificationScreen"
import ProfilUser from "../../screens/ProfilUser"

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
        component={NotificationScreen}
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

