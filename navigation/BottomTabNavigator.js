import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import LoginScreen from "../screens/LoginScreen";
import { Ionicons } from '@expo/vector-icons';
import Colors from "../constants/Colors"
const BottomTab = createBottomTabNavigator();


export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator headerMode="none" backBehavior="none">
      <BottomTab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="tableau"
        component={LinksScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="tasks" />
          ),
        }}
      />
      <BottomTab.Screen
        name="paramètre"
        component={LinksScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: (
            <Ionicons
              name=""
              size={30}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="user" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
