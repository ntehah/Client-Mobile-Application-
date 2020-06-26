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
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import FormTextInput from "./FormTextInput";
import DateTimePicker from "react-native-modal-datetime-picker";
import { UrlServer } from "../constants/UrlServer";
import RNPickerSelect from "react-native-picker-select";

export default function AddTask({ navigation }) {
  const [volunteers, setVolunteers] = useState([]);
  const [Events, setEvents] = useState([]);

  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedVolunteerId, setSelectedVolunteerId] = useState(null);

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const [ValidTitre, setValidTitre] = useState(false);
  const [ValidDescription, setValidDescription] = useState(false);
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
        for (var i in data) {
          item = data[i];
          setVolunteers((volunteers) => [
            ...volunteers,
            {
              label: item.nameVolunteer,
              value: item.idVolunteer,
            },
          ]);
        }
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
        for (var i in data) {
          item = data[i];
          setEvents((Events) => [
            ...Events,
            {
              label: item.nameEvent,
              value: item.idEvent,
            },
          ]);
        }
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
        id:0,
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
      .then((data) => {
      })
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
  const placeholderEvenet = {
    label: "Sélectionné un événement...",
    value: null,
    color: "#9EA0A4",
  };
  const placeholderVolunteer = {
    label: "Sélectionné un Bénévole...",
    value: null,
    color: "#9EA0A4",
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
            ColorIcon={Colors.BLUE}
            onChangeText={(text) => {
              setTitre(text);
              if (text.length > 3) setValidTitre(true);
            }}
            value={titre}
          />
          <FormTextInput
            placeHolder="Description"
            nameIcon="text"
            ColorIcon={Colors.BLUE}
            onChangeText={(text) => {
              setDescription(text);
              if (text.length > 3) setValidDescription(true);
            }}
            value={description}
          />
          <View style={styles.DateEventView}>
            <Text style={styles.text}>Date Limite :</Text>
            <Text style={styles.textDate}>
              {date.getDate()} - {date.getMonth()} - {date.getFullYear()}
            </Text>
            <View>
              <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
                <MaterialCommunityIcons
                  name="timetable"
                  size={30}
                  color={Colors.BLUE}
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
            <RNPickerSelect
              placeholder={placeholderVolunteer}
              onValueChange={(value) => setSelectedVolunteerId(value)}
              items={volunteers}
              itemKey={volunteers.value}
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
          <View style={styles.picker}>
            <RNPickerSelect
              placeholder={placeholderEvenet}
              onValueChange={(value) => setSelectedEventId(value)}
              items={Events}
              itemKey={Events.value}
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
              <Text style={styles.text}>Ajouter</Text>
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
    paddingTop: 20,
    paddingBottom: 20,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  textDate:{
    fontSize: 18,
    fontWeight: "normal",
    color: Colors.tintColor,
  },
  Button: {
    width: 160,
    height:40,
    borderRadius: 15,
    marginTop: 40,
    backgroundColor: Colors.WHITE,
    paddingTop: 3,
    paddingBottom: 2,
    paddingLeft: 10,
    shadowColor: "#0A369D",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: "center",
    alignItems:"center",
  },
  text: {
    fontSize: 18,
    fontWeight: "normal",
    color: Colors.BLUE,
  },
  buttonView:{
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:100,
}
});
