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
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import FormTextInput from "./FormTextInput";
import DateTimePicker from "react-native-modal-datetime-picker";
import { UrlServer } from "../constants/UrlServer";

export default function AddTask({ navigation }) {
  const [volunteers, setVolunteers] = useState([]);
  const [Events, setEvents] = useState([]);

  const [selectedEventId, setSelectedEventId] = useState("");
  const [selectedVolunteerId, setSelectedVolunteerId] = useState("");

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
        setVolunteers(data);
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
        setEvents(data);
      })
      .done();
    setLoading(false);
  };
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
        idEvent: selectedEventId,
        idVolunteer: selectedVolunteerId,
        titre: titre,
        emailorg: EMAIL,
        description: description,
        date: date.getTime(),
        state:"A FAIRE"
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .done();
  };
  AjouterTaskHandler = () => {
    AjouterTask();
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
              selectedValue={selectedVolunteerId}
              style={{ width: "100%" }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedVolunteerId(itemValue)
              }
            >
              {volunteers.map((vol, index) => {
                return (
                  <Picker.Item
                    label={vol.nameVolunteer}
                    value={vol.idVolunteer}
                    key={index}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={styles.picker}>
            <Text style={styles.text}>Sélectionné l'événement</Text>

            <Picker
              selectedValue={selectedEventId}
              style={{ width: "100%" }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedEventId(itemValue)
              }
            >
              {Events.map((eve, index) => {
                return (
                  <Picker.Item
                    label={eve.nameEvent}
                    value={eve.idEvent}
                    key={index}
                  />
                );
              })}
            </Picker>
          </View>
          <View>
            <TouchableOpacity
              style={styles.Button}
              onPress={AjouterTaskHandler}
            >
              <Text style={styles.text}>Ajouter</Text>

              <FontAwesome
                name="angle-double-right"
                size={30}
                color={Colors.WHITE}
              />
            </TouchableOpacity>
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
