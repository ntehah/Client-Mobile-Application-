import React, { useState, useContext } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import FormTextInput from "../components/FormTextInput";
import Colors from "../constants/Colors";
import { VolunteerInscription } from "../Services/VolunteerInscription";

export default function Information({ navigation, route }) {
  const [state, InscriptionContext] = useContext(VolunteerInscription);
  const { email ,name} = route.params;
  const [Numero, setNumero] = useState("");
  const [Adresse, setAdress] = useState("");
  const [Jour, setJour] = useState("");
  const [Mois, setMois] = useState("");
  const [Annee, setAnnee] = useState("");
  const [ValidNumero, setValidNumero] = useState(false);
  const [ValidAdresse, setValidAdress] = useState(false);
  const [ValidJour, setValidJour] = useState(false);
  const [ValidMois, setValidMois] = useState(false);
  const [ValidAnnee, setValidAnnee] = useState(false);

  const ContinueHandler = () => {
    if (ValidNumero && ValidAdresse && ValidJour && ValidMois && ValidAnnee) {
      let date = Jour + "/" + Mois + "/" + Annee;
      InscriptionContext.Information({
        numero: Numero,
        adresse: Adresse,
        date: date,
        Email: email,
        Name:name,
      });
      navigation.navigate("Photo");
    } else {
      Alert.alert(
        "Login",
        " verifier les champs ",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false },
      );
    }
  };
  return (
    <ScrollView>
      <View style={Styles.InputContainer}>
        <KeyboardAvoidingView>
          <FormTextInput
            placeHolder="Numéro téléphone "
            nameIcon="mobile"
            onChangeText={(text) => {
              setNumero(text);
              if (text.length > 7) {
                setValidNumero(true);
              }
            }}
            value={Numero}
            autoCompleteType="tel"
            keyboardType="phone-pad"
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
          <FormTextInput
            placeHolder="adresse"
            nameIcon="location"
            onChangeText={(text) => {
              setAdress(text);
              if (text.length > 4) {
                setAdress(text);
                setValidAdress(true);
              }
            }}
            value={Adresse}
            autoCompleteType="street-address"
          />
        </KeyboardAvoidingView>
        <View style={Styles.DateView}>
          <Text>Date de naissance :</Text>
          <View style={Styles.dateDeNaissance}>
            <View style={{ width: 70, height: 50 }}>
              <FormTextInput
                placeHolder="Jour"
                onChangeText={(text) => {
                  setJour(text);
                  let jour = parseInt(text, 10);
                  if (jour > 0 && jour <= 31) {
                    setValidJour(true);
                  }
                }}
                value={Jour}
                keyboardType="numeric"
                maxLength="2"
              />
            </View>
            <View style={{ width: 100 }}>
              <FormTextInput
                placeHolder="Mois"
                onChangeText={(text) => {
                  setMois(text);
                  let mois = parseInt(text, 10);
                  if (mois > 0 && mois <= 12) {
                    setValidMois(true);
                  }
                }}
                value={Mois}
                keyboardType="numeric"
                maxLength="2"
              />
            </View>
            <View style={{ width: 100 }}>
              <FormTextInput
                placeHolder="Année"
                onChangeText={(text) => {
                  setAnnee(text);
                  let annee = parseInt(text, 10);
                  if (annee > 1900 && annee <= 2020) {
                    setValidAnnee(true);
                  }
                }}
                value={Annee}
                keyboardType="numeric"
                maxLength="4"
              />
            </View>
          </View>
          <View style={{ height: 50 }} />
        </View>
      </View>
      <View style={Styles.ButtonViewContinue}>
        <TouchableOpacity
          style={Styles.ButtonContinue}
          onPress={ContinueHandler}
        >
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const Styles = StyleSheet.create({
  container: {},
  InputContainer: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
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
  dateDeNaissance: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingTop: 20,
  },
  DateView: {
    flexDirection: "column",
    paddingLeft: 10,
  },
});
