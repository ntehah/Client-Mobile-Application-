import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import LoggedIn from './Login/LoggedIn';
import Volunteer from "./Volunteer/Volunteer";


export default function App(props) {
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

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
