import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import LoggedIn from "./Services/LoggedIn";

export default function App(props) {
  return (
    <View style={styles.container}>
      <LoggedIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
