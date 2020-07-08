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
import DateTimePicker from "react-native-modal-datetime-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { VolunteerInscription } from "../Services/VolunteerInscription";

export default function Information({ navigation, route }) {
  const [state, InscriptionContext] = useContext(VolunteerInscription);
  const { email, name } = route.params;
  const [Numero, setNumero] = useState("");
  const [Adresse, setAdress] = useState("");
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [ValidNumero, setValidNumero] = useState(false);
  const [ValidAdresse, setValidAdress] = useState(false);

  const ContinueHandler = () => {
    if (ValidNumero && ValidAdresse) {
      InscriptionContext.Information({
        numero: Numero,
        adresse: Adresse,
        date: date,
        Email: email,
        Name: name,
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
        <View style={Styles.DateEventView}>
          <Text style={Styles.text}>Date de Naissance :</Text>
          <Text style={Styles.text}>
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
  text: { color: Colors.tintColor, fontSize: 19, fontWeight: "100" },
  DateEventView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
  },
});
