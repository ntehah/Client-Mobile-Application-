import * as React from "react";
import { Platform, StatusBar,View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigatorUser from "../navigation/BottomTabNavigatorUser";
import BottomTabNavigatorOrganisation from '../navigation/BottomTabNavigatorOrganisation'
class LoggedIn extends React.Component {
  state = {
    type: "Volunteer",
  };

  render() {
    return (
 
      <NavigationContainer>
        <BottomTabNavigatorOrganisation />
      </NavigationContainer>
    );
  }
}


export default LoggedIn;
