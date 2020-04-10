import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen2 from "../screens/Organisation/HomeScreen2";
import MenuScreen from "../screens/Organisation/MenuScreen"
import Community from "../screens/Organisation/Community"
import CommunityDemo from "../screens/Organisation/CommunityDemo"
import ProfilScreen from '../screens/Organisation/ProfilScreen'
import Messages from '../screens/Organisation/Messages'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator headerMode="none" backBehavior="none">
      <BottomTab.Screen
        name="Accueil"
        component={HomeScreen2}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={CommunityDemo}
        options={{
          tabBarLabel: "Communauté",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="group" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Organisation"
        component={ProfilScreen}
        options={{
          tabBarLabel: "Organisation",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="institution" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={Messages}
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

