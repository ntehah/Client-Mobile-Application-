import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import Colors from "../../constants/Colors";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { UrlServer } from "../../constants/UrlServer";
import TaskCard from "./TaskCard";
import ModifierTask from "./ModifierTask";
const Stack = createStackNavigator();

function TaskList({ navigation }) {
  const [DataTasks, setDataTasks] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetTasks();
  }, []);
  GetTasks = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "task/getalltasksbyvolunteer", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: EMAIL,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setDataTasks(data);
        setLoading(false);
      })

      .done();
  };
  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 200,
          }}
        >
          <ActivityIndicator size="large" color={Colors.BLACK} />
        </View>
      ) : (
        <View>
          {
            <View>
              {DataTasks.length ? (
                <View>
                  {DataTasks.map((ta, index) => {
                    return (
                      <View key={index}>
                        <TaskCard
                          titre={ta.titre}
                          description={ta.description}
                          date={ta.date}
                          state={ta.state}
                          photovol={ta.photoVolunteer}
                          namevol={ta.nameVolunteer}
                          nameEve={ta.nameEvenement}
                          photoEve={ta.photoEvenement}
                          navigation={navigation}
                          id={ta.id}
                        />
                      </View>
                    );
                  })}
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 300,
                  }}
                >
                  <Text>tache mahoum 5alguin</Text>
                </View>
              )}
            </View>
          }
        </View>
      )}
    </ScrollView>
  );
}
export default function Task() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{ title: "Vos taches", headerBackTitle: "Retour" }}
      />
      <Stack.Screen
          name="ModifierTask"
          component={ModifierTask}
          options={{ title: "Tache", headerBackTitle: "Retour" }}
        />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {},
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
