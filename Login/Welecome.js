import React, { useState, useContext } from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import Colors from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { VolunteerInscription } from "../Services/VolunteerInscription";
import { UrlServer } from "../constants/UrlServer";
import { AuthContext } from "../Services/AuthContext";

export default function Welecome({ navigation }) {
  const [state, InscriptionContext] = useContext(VolunteerInscription);
  const [state1, authContext] = React.useContext(AuthContext);

  const AjouterVolunteer = async () => {
    console.log(state.Qualification)
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    fetch(UrlServer + "volunteer/ajouter", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adress: state.Adresse,
        calendrier: state.Calendrier,
        numero: state.Numero,
        email: state.Email,
        dateDeNaissance: state.DateDeNaissance,
        photo: state.Photo,
        qualification: state.Qualification,
        name: state.Name,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .done(() => authContext.loggedIn());
  };
  const ContinueHandler = () => {
    AjouterVolunteer();
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.WelecomeView}>
        <MaterialIcons name="check-circle" size={120} color={Colors.GREEN} />
        <Text style={Styles.text}>Bienvenue</Text>
        <Text style={Styles.textInscription}>Inscription réussie</Text>
      </View>
      <View style={Styles.ButtonViewContinue}>
        <TouchableOpacity
          style={Styles.ButtonContinue}
          onPress={ContinueHandler}
        >
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 100,
  },
  WelecomeView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60,
  },
  ButtonContinue: {
    width: "40%",
    height: 50,
    borderWidth: 1,
    borderColor: Colors.DODGER_BLUE,
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    color: Colors.DODGER_BLUE,
  },
  ButtonViewContinue: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 27,
    fontWeight: "bold",
    color: Colors.DODGER_BLUE,
    paddingTop: 15,
  },
  textInscription: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.tintColor,
    paddingTop: 15,
  },
});
