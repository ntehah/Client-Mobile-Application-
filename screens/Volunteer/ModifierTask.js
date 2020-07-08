import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { UrlServer } from "../../constants/UrlServer";
import RNPickerSelect from "react-native-picker-select";

export default function AddTask({ navigation, route }) {
  const [selectedVolunteerId, setSelectedVolunteerId] = useState(null);
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setState(route.params.state);
    setLoading(false);
  }, []);

  AjouterTask = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "task/addtask", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        idEvent: selectedEventId,
        idVolunteer: selectedVolunteerId,
        titre: titre,
        emailorg: EMAIL,
        description: description,
        date: date.getTime(),
        state: "A FAIRE",
      }),
    })
      .then((response) => response.text())
      .then((data) => {})
      .done();
  };
  AjouterTaskHandler = () => {
    if (
      setSelectedEventId != null &&
      selectedVolunteerId != null &&
      ValidTitre &&
      ValidDescription
    ) {
      AjouterTask();
    }
  };
  const list = [
    { label: state, value: 1 },
    { label: "Baseball", value: 2 },
    { label: "Hockey", value: 3 },
  ];
  const list2 = [
    { label: "Faire", value: 2 },
    { label: "Terminé", value: 3 },
  ];
  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 300,
          }}
        >
          <ActivityIndicator size="large" color={Colors.BLACK} />
        </View>
      ) : (
        <View>
        <View style={styles.title}>
        <Text style={styles.textTitle}>Modifier l'état d'une tâche</Text>

        </View>
          <View style={styles.picker}>
            <RNPickerSelect
              placeholder={list[0]}
              onValueChange={(value) => setSelectedVolunteerId(value)}
              items={list2}
              itemKey={list.value}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
                placeholder: {
                  color: Colors.BLUE,
                  fontSize: 13,
                  fontWeight: "bold",
                },
              }}
              Icon={() => {
                return (
                  <Ionicons
                    name="md-arrow-down"
                    size={24}
                    color={Colors.BLUE}
                  />
                );
              }}
            />
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.Button}
              onPress={AjouterTaskHandler}
            >
              <Text style={styles.text}>Enregistrer</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column",
    paddingTop: 50,
  },
  picker: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  Button: {
    width: 160,
    height: 40,
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    paddingTop: 3,
    paddingBottom: 2,
    paddingLeft: 10,
    shadowColor: Colors.BLUE,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
      width:"100%",
      alignItems:"center",
      justifyContent:"center"
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.BLUE,
  },
  text: {
    fontSize: 18,
    fontWeight: "normal",
    color: Colors.BLUE,
  },
  buttonView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
