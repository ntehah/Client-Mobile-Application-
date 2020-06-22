import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import image from "../../assets/images/Profile.png";
import Colors from "../../constants/Colors";
import Task from "./Task";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../../Services/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import AddEvenement from "./AddEvenement";
import AddTask from "../../components/AddTask";
import EvenementScreen from "./EvenementScreen";

const Stack = createStackNavigator();

function Menu({ navigation }) {
  const [state, authContext] = React.useContext(AuthContext);

  AddEventHandler = () => {
    navigation.navigate("AddEvent");
  };
  EventHandler = () => {
    navigation.navigate("EvenementScreen");
  };
  AddTaskHandler = () => {
    navigation.navigate("AddTask");
  };
  TasksHandler = () => {
    navigation.navigate("Task");
  };
  SignOutHundler = () => {
    authContext.signOut();
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Menu</Text>
      </View>
      <View style={styles.Buttons}>
        <TouchableOpacity style={styles.Button} onPress={AddEventHandler}>
          <Ionicons name="ios-add" size={40} color={Colors.DODGER_BLUE} />
          <Text style={styles.text}>Ajouter</Text>
          <Text style={styles.text}>Événement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={EventHandler}>
          <MaterialIcons
            name="event-available"
            size={35}
            color={Colors.DODGER_BLUE}
          />
          <Text style={styles.text}>Événements</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Buttons}>
        <TouchableOpacity style={styles.Button} onPress={AddTaskHandler}>
          <Ionicons name="ios-add" size={40} color={Colors.DODGER_BLUE} />
          <Text style={styles.text}>Ajouter</Text>
          <Text style={styles.text}>Tâche</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={TasksHandler}>
          <MaterialIcons
            name="event-available"
            size={35}
            color={Colors.DODGER_BLUE}
          />
          <Text style={styles.text}>Tâches</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Buttons}>
        <TouchableOpacity style={styles.Button} onPress={SignOutHundler}>
          <MaterialCommunityIcons
            name="file-document-box-multiple"
            size={30}
            color={Colors.DODGER_BLUE}
          />
          <Text style={styles.text}>Se Deconnecter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default function MenuScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.WHITE,
        },
        headerTitleStyle: { color: Colors.tintColor },
        headerTintColor: Colors.tintColor,
      }}
    >
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen
        name="AddEvent"
        component={AddEvenement}
        options={{ title: "Ajouter Événement", headerBackTitle: "Retour" }}
      />
      <Stack.Screen
        name="EvenementScreen"
        component={EvenementScreen}
        options={{ title: "Événements", headerBackTitle: "Retour" }}
      />
      <Stack.Screen
        name="Task"
        component={Task}
        options={{ title: "Tâches", headerBackTitle: "Retour" }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{ title: "Ajouter Tâche", headerBackTitle: "Retour" }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DODGER_BLUE,
  },
  title: {
    paddingTop: 50,
    paddingBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.tintColor,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
  },
  Button: {
    width: 160,
    borderRadius: 15,
    marginTop: 40,
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
    paddingTop: 3,
    paddingBottom: 2,
    paddingLeft: 10,
    shadowColor: "#0A369D",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: "normal",
    color: Colors.tintColor,
  },
});
