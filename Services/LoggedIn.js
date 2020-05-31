import React, { useState } from "react";
import { AsyncStorage, StatusBar, View } from "react-native";
import BottomTabNavigatorUser from "../navigation/BottomTabNavigatorUser";
import BottomTabNavigatorOrganisation from "../navigation/BottomTabNavigatorOrganisation";

export default function LoggedIn() {
  const [role, setRole] = useState("");
  const bootstrapAsync = async () => {
    let role;

    try {
      role = await AsyncStorage.getItem("id_role");
    } catch (e) {
      console.log(e);
    }

    setRole(role);
  };
  bootstrapAsync();
  if (role === "ROLE_VOLUNTEER") return <BottomTabNavigatorUser />;
  return <BottomTabNavigatorOrganisation />;
}
