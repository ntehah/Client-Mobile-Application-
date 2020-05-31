import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import Colors from "../constants/Colors";
import { VolunteerInscription } from "../Services/VolunteerInscription";

export default function Calendrier({ navigation }) {
  const [state,InscriptionContext]  = useContext(VolunteerInscription);

  const [LundiMatin, setLundiMatin] = useState(false);
  const [LundiApresMidi, setLundiApresMidi] = useState(false);
  const [LundiSoiree, setLundiSoiree] = useState(false);
  //------------------------------------------------------
  const [MardiMatin, setMardiMatin] = useState(false);
  const [MardiApresMidi, setMardiApresMidi] = useState(false);
  const [MardiSoiree, setMardiSoiree] = useState(false);
  //-------------------------------------------------------
  const [MercrediMatin, setMercrediMatin] = useState(false);
  const [MercrediApresMidi, setMercrediApresMidi] = useState(false);
  const [MercrediSoiree, setMercrediSoiree] = useState(false);
  //-------------------------------------------------------
  const [JeudiMatin, setJeudiMatin] = useState(false);
  const [JeudiApresMidi, setJeudiApresMidi] = useState(false);
  const [JeudiSoiree, setJeudiSoiree] = useState(false);
  //-------------------------------------------------------
  const [VendrediMatin, setVendrediMatin] = useState(false);
  const [VendrediApresMidi, setVendrediApresMidi] = useState(false);
  const [VendrediSoiree, setVendrediSoiree] = useState(false);
  //-------------------------------------------------------
  const [SamediMatin, setSamediMatin] = useState(false);
  const [SamediApresMidi, setSamediApresMidi] = useState(false);
  const [SamediSoiree, setSamediSoiree] = useState(false);
  //-------------------------------------------------------
  const [DimancheMatin, setDimancheMatin] = useState(false);
  const [DimancheApresMidi, setDimancheApresMidi] = useState(false);
  const [DimancheSoiree, setDimancheSoiree] = useState(false);
  //-------------------------------------------------------
  const ContinueHandler = () => {
    let calendrierString = JSON.stringify({
      lundi: {
        matin: LundiMatin,
        apresmidi: LundiApresMidi,
        soire: LundiSoiree,
      },
      mardi: {
        matin: MardiMatin,
        apresmidi: MardiApresMidi,
        soire: MardiSoiree,
      },
      mercredi: {
        matin: MercrediMatin,
        apresmidi: MercrediApresMidi,
        soire: MercrediSoiree,
      },
      jeudi: {
        matin: JeudiMatin,
        apresmidi: JeudiApresMidi,
        soire: JeudiSoiree,
      },
      vendredi: {
        matin: VendrediMatin,
        apresmidi: VendrediApresMidi,
        soire: VendrediSoiree,
      },
      samedi: {
        matin: SamediMatin,
        apresmidi: SamediApresMidi,
        soire: SamediSoiree,
      },
      dimenche: {
        matin: DimancheMatin,
        apresmidi: DimancheApresMidi,
        soire: DimancheSoiree,
      },
    });
    InscriptionContext.Calendrier(calendrierString);
    navigation.navigate("Welecome");
  };
  return (
    <View>
      <View style={InfoStyles.TitleView}>
        <Text style={InfoStyles.textTitle}>Availability</Text>
      </View>
      <View style={InfoStyles.Availability}>
        <View style={InfoStyles.isAvailable}>
          <Text style={InfoStyles.text}>Matin</Text>
          <Text style={InfoStyles.text}>Après midi</Text>
          <Text style={InfoStyles.text}>Soirée</Text>
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Lundi</Text>
          <CheckBox
            containerStyle={InfoStyles.CheckBox}
            checked={LundiMatin}
            onPress={() => {
              setLundiMatin(!LundiMatin);
            }}
          />
          <CheckBox
            checked={LundiApresMidi}
            onPress={() => {
              setLundiApresMidi(!LundiApresMidi);
            }}
          />
          <CheckBox
            checked={LundiSoiree}
            onPress={() => {
              setLundiSoiree(!LundiSoiree);
            }}
          />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Mardi</Text>
          <CheckBox
            containerStyle={InfoStyles.CheckBox}
            checked={MardiMatin}
            onPress={() => {
              setMardiMatin(!MardiMatin);
            }}
          />
          <CheckBox
            checked={MardiApresMidi}
            onPress={() => {
              setMardiApresMidi(!MardiApresMidi);
            }}
          />
          <CheckBox
            checked={MardiSoiree}
            onPress={() => {
              setMardiSoiree(!MardiSoiree);
            }}
          />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Mercredi</Text>
          <CheckBox
            containerStyle={InfoStyles.CheckBox}
            checked={MercrediMatin}
            onPress={() => {
              setMercrediMatin(!MercrediMatin);
            }}
          />
          <CheckBox
            checked={MercrediApresMidi}
            onPress={() => {
              setMercrediApresMidi(!MercrediApresMidi);
            }}
          />
          <CheckBox
            checked={MercrediSoiree}
            onPress={() => {
              setMercrediSoiree(!MercrediSoiree);
            }}
          />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Jeudi</Text>
          <CheckBox
            containerStyle={InfoStyles.CheckBox}
            checked={JeudiMatin}
            onPress={() => {
              setJeudiMatin(!JeudiMatin);
            }}
          />
          <CheckBox
            checked={JeudiApresMidi}
            onPress={() => {
              setJeudiApresMidi(!JeudiApresMidi);
            }}
          />
          <CheckBox
            checked={JeudiSoiree}
            onPress={() => {
              setJeudiSoiree(!JeudiSoiree);
            }}
          />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Vendredi</Text>
          <CheckBox
            containerStyle={InfoStyles.CheckBox}
            checked={VendrediMatin}
            onPress={() => {
              setVendrediMatin(!VendrediMatin);
            }}
          />
          <CheckBox
            checked={VendrediApresMidi}
            onPress={() => {
              setVendrediApresMidi(!VendrediApresMidi);
            }}
          />
          <CheckBox
            checked={VendrediSoiree}
            onPress={() => {
              setVendrediSoiree(!VendrediSoiree);
            }}
          />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Samedi</Text>
          <CheckBox
            containerStyle={InfoStyles.CheckBox}
            checked={SamediMatin}
            onPress={() => {
              setSamediMatin(!SamediMatin);
            }}
          />
          <CheckBox
            checked={SamediApresMidi}
            onPress={() => {
              setSamediApresMidi(!SamediApresMidi);
            }}
          />
          <CheckBox
            checked={SamediSoiree}
            onPress={() => {
              setSamediSoiree(!SamediSoiree);
            }}
          />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Dimanche</Text>
          <CheckBox
            containerStyle={InfoStyles.CheckBox}
            checked={DimancheMatin}
            onPress={() => {
              setDimancheMatin(!DimancheMatin);
            }}
          />
          <CheckBox
            checked={DimancheApresMidi}
            onPress={() => {
              setDimancheApresMidi(!DimancheApresMidi);
            }}
          />
          <CheckBox
            checked={DimancheSoiree}
            onPress={() => {
              setDimancheSoiree(!DimancheSoiree);
            }}
          />
        </View>
      </View>
      <View style={InfoStyles.ButtonViewContinue}>
        <TouchableOpacity
          style={InfoStyles.ButtonContinue}
          onPress={ContinueHandler}
        >
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const InfoStyles = StyleSheet.create({
  container: {},
  TitleView: {
    padding: 8,
  },
  row: {
    padding: 8,
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
  },
  text: {
    color: Colors.tintColor,
    fontSize: 14,
  },
  textTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.DODGER_BLUE,
  },
  Availability: {
    paddingLeft: 8,
  },
  isAvailable: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 122,
    paddingRight: 20,
  },
  textJour: {
    width: 100,
    color: Colors.tintColor,
    fontSize: 14,
  },
  Jour: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
  },
  CheckBox: {},
  Note: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  ButtonView: {
    marginTop: 10,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  Button: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: Colors.tintColor,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    color: Colors.TORCH_RED,
    fontSize: 14,
  },
  AddNote: {
    paddingRight: 30,
    paddingLeft: 30,
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
});
