import React, { useState, useContext } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";
import FormTextInput from "../components/FormTextInput";
import Colors from "../constants/Colors";
import { VolunteerInscription } from "../Services/VolunteerInscription";

export default function Qualification({ navigation }) {
  const initialValue = [{ value: "" }];
  const [Skills, setSkills] = useState(initialValue);
  const [skill, setskill] = useState("");
  const  [state,InscriptionContext]  = useContext(VolunteerInscription);

  const ContinueHandler = () => {
    let QualificationString=JSON.stringify(Skills);
    InscriptionContext.Qualification(QualificationString);
    navigation.navigate("Calendrier");
  };
  return (
    <ScrollView style={QualificationStyles.container}>
      <View style={QualificationStyles.Skills}>
        <View style={QualificationStyles.skillTab}>
          {Skills.map((s, index) => (
            <View style={QualificationStyles.skill} key={index}>
              <Text style={QualificationStyles.text}>{s.value}</Text>
            </View>
          ))}
        </View>
        <View>
          <View style={QualificationStyles.AddNote}>
            <KeyboardAvoidingView>
              <FormTextInput
                placeHolder="compétences"
                nameIcon="man"
                onChangeText={(text) => setskill(text)}
                value={skill}
              />
            </KeyboardAvoidingView>
            <View style={QualificationStyles.ButtonViewNote}>
              <TouchableOpacity
                style={QualificationStyles.ButtonNote}
                onPress={() => {
                  if (skill != "") setSkills([...Skills, { value: skill }]);
                  setskill("");
                }}
              >
                <Text>Ajouter</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 100 }} />
          </View>
        </View>
      </View>
      <View style={QualificationStyles.ButtonViewContinue}>
        <TouchableOpacity
          style={QualificationStyles.ButtonContinue}
          onPress={ContinueHandler}
        >
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const QualificationStyles = StyleSheet.create({
  container: {},
  Skills: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 20,
  },
  textSkill: {
    color: Colors.DODGER_BLUE,
    fontSize: 16,
  },
  skill: {
    borderColor: Colors.DODGER_BLUE,
    borderWidth: 2,
    borderRadius: 20,
    margin: 3,
    padding: 6,
  },
  skillTab: {
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.DODGER_BLUE,
  },
  ButtonNote: {
    width: "20%",
    height: 50,
    borderWidth: 1,
    borderColor: Colors.tintColor,
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  ButtonViewNote: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  AddNote: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 30,
    paddingLeft: 30,
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
  IconAdd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 6,
  },
  Affectations: {
    marginLeft: 10,
  },
});