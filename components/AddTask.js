import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Picker,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import Colors from "../constants/Colors";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import FormTextInput from "./FormTextInput";
import DateTimePicker from "react-native-modal-datetime-picker";
import { UrlServer } from "../constants/UrlServer";

export default function AddTask({ navigation }) {
  const [selectedVolunteerName, setSelectedVolunteerName] = useState("java");
  const [selectedVolunteerId, setSelectedVolunteerId] = useState("");
  const [volunteers, setVolunteers] = useState([]);
  const [Events, setEvents] = useState([]);

  const [selectedEventName, setSelectedEventName] = useState("");
  const [selectedEventId, setSelectedEventId] = useState("");

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVolunteers();
  }, []);
  getVolunteers = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "task/getVolunteers", {
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
        console.log(data);
      })
      .done();
    fetch(UrlServer + "task/getallev", {
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
        console.log(data);
      })
      .done();
    setLoading(false);
  };
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
          <FormTextInput
            placeHolder="Titre"
            nameIcon="text"
            ColorIcon={Colors.BLACK}
            onChangeText={(text) => {
              setTitre(text);
            }}
            value={titre}
          />
          <FormTextInput
            placeHolder="Description"
            nameIcon="text"
            ColorIcon={Colors.BLACK}
            onChangeText={(text) => {
              setDescription(text);
            }}
            value={description}
          />
          <View style={styles.DateEventView}>
            <Text style={styles.text}>Date Limite :</Text>
            <Text style={styles.text}>
              {date.getDate()} - {date.getMonth()} - {date.getFullYear()}
            </Text>
            <View>
              <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
                <MaterialCommunityIcons
                  name="timetable"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
              <DateTimePicker
                isVisible={isDatePickerVisible}
                onConfirm={(date) => {
                  setDate(date);
                  setIsDatePickerVisible(false);
                }}
                onCancel={() => setIsDatePickerVisible(false)}
              />
            </View>
          </View>
          <View style={styles.picker}>
            <Text style={styles.text}>Sélectionné Bénévole </Text>
            <Picker
              selectedValue={selectedVolunteerName}
              style={{ width: "100%" }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedVolunteerName(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="Java1" value="java1" />
              <Picker.Item label="Java2" value="java2" />
              <Picker.Item label="Java3" value="java3" />

              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style={styles.picker}>
            <Text style={styles.text}>Sélectionné l'événement</Text>

            <Picker
              selectedValue={selectedEventName}
              style={{ width: "100%" }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedEventName(itemValue)
              }
            >
              <Picker.Item label="Python" value="python" />
              <Picker.Item label="C" value="C" />
            </Picker>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.DODGER_BLUE,
    flexDirection: "column",
    paddingTop: 30,
  },
  DateEventView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 15,
  },
  picker: {
    flexDirection: "column",
    alignItems: "center",
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
