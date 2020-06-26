import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/Organisation/HomeScreen";
import MenuScreen from "../screens/Organisation/MenuScreen"
import Community from "../screens/Organisation/Community"
import Forum from '../screens/Organisation/Forum'
import Profile from "../screens/Organisation/ProfilOrganization"
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator() {
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
        name="Community"
        component={Community}
        options={{
          tabBarLabel: "Communauté",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="group" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Organisation"
        component={Profile}
        options={{
          tabBarLabel: "Organisation",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="institution" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={Forum}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="wechat" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="align-justify" />
          ),
        }}
      />
      
    </BottomTab.Navigator>
  );
}

