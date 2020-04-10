import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { CheckBox } from "react-native-elements";
import Colors from "../../constants/Colors";
import image from "../../assets/images/Profile.png";
import { MaterialIcons } from "@expo/vector-icons";
import FormTextInput from "../../components/FormTextInput";

function Info() {
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
  const [AddNote, setAddNote] = useState(false);
  const [Note, setNote] = useState("");
  //-------------------------------------------------------
  const OnButtonToggleAddNote = () => {
    if (AddNote === true) {
      return (
        <View style={InfoStyles.AddNote}>
          <KeyboardAvoidingView behavior="padding">
            <FormTextInput
              placeHolder="Note"
              nameIcon="evernote"
              onChangeText={(text) => setNote(text)}
              value={Note}
            />
          </KeyboardAvoidingView>
          <View style={InfoStyles.ButtonViewNote}>
            <TouchableOpacity style={InfoStyles.ButtonNote}>
              <Text>Annuler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={InfoStyles.ButtonNote}>
              <Text>Ajouter</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 80 }} />
        </View>
      );
    } else return <View></View>;
  };
  return (
    <View>
      <View style={InfoStyles.TitleView}>
        <Text style={InfoStyles.textTitle}>Information</Text>
      </View>

      <View style={InfoStyles.row}>
        <Text style={InfoStyles.text}>Email: </Text>
        <Text style={InfoStyles.text}>ntehah.kdr07@gmail.com</Text>
      </View>
      <View style={InfoStyles.row}>
        <Text style={InfoStyles.text}>Numero: </Text>
        <Text style={InfoStyles.text}>+21695282211</Text>
      </View>
      <View style={InfoStyles.row}>
        <Text style={InfoStyles.text}>Address: </Text>
        <Text style={InfoStyles.text}>Zarzouna,Bizerte</Text>
      </View>
      <View style={InfoStyles.row}>
        <Text style={InfoStyles.text}>Date de naissance: </Text>
        <Text style={InfoStyles.text}>20/02/2000</Text>
      </View>
      <View style={InfoStyles.TitleView}>
        <Text style={InfoStyles.textTitle}>Documents</Text>
      </View>
      <View></View>
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
      <View style={InfoStyles.Note}>
        <CheckBox
          center
          title="créer une note sur abdelkade"
          iconRight
          iconType="material"
          checkedIcon="add"
          uncheckedIcon="add"
          checked={AddNote}
          onPress={() => {
            setAddNote(!AddNote);
          }}
        />
        <View>
          <OnButtonToggleAddNote />
        </View>
      </View>
      <View style={InfoStyles.ButtonView}>
        <TouchableOpacity style={InfoStyles.Button}>
          <Text style={InfoStyles.ButtonText}>Supprimer de l'organistaion</Text>
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
});
function Qualification() {
  const [AddSikll, setAddSkill] = useState(false);
  const [skill, setskill] = useState("");
  const OnButtonToggleAddSkill = () => {
    if (AddSikll === true) {
      return (
        <View style={InfoStyles.AddNote}>
          <KeyboardAvoidingView>
            <FormTextInput
              placeHolder="compétences"
              nameIcon="man"
              onChangeText={(text) => setskill(text)}
              value={skill}
            />
          </KeyboardAvoidingView>
          <View style={InfoStyles.ButtonViewNote}>
            <TouchableOpacity style={InfoStyles.ButtonNote}>
              <Text>Ajouter</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 100 }} />
        </View>
      );
    } else return <View></View>;
  };
  return (
    <View style={QualificationStyles.container}>
      <View style={QualificationStyles.Skills}>
        <Text style={QualificationStyles.textTitle}>Prenom Compétences</Text>
        <View style={QualificationStyles.skillTab}>
          <View style={QualificationStyles.skill}>
            <Text style={QualificationStyles.text}>Java</Text>
          </View>
          <View style={QualificationStyles.skill}>
            <Text style={QualificationStyles.text}>Python</Text>
          </View>
        </View>
        <View style={QualificationStyles.IconAdd}>
          <CheckBox
            iconRight
            iconType="material"
            checkedIcon="clear"
            size={35}
            uncheckedColor={Colors.DODGER_BLUE}
            uncheckedIcon="add"
            checked={AddSikll}
            onPress={() => {
              setAddSkill(!AddSikll);
            }}
          />
        </View>
        <View>
          <OnButtonToggleAddSkill />
        </View>
      </View>
      <View style={QualificationStyles.Affectations}>
        <Text style={QualificationStyles.textTitle}>Affectations</Text>
      </View>

    </View>
  );
}
const QualificationStyles = StyleSheet.create({
  container: {},
  Skills: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
    marginTop:8,
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
  IconAdd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 6,
  },
  Affectations:{
    marginLeft:10,
  },
});
function Activite() {
  return (
    <View style={ActiviteStyles.container}>
      <Text style={ActiviteStyles.text}>Activite</Text>
    </View>
  );
}
const ActiviteStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.warningBackground,
  },
  text: {
    fontSize: 100,
  },
});
function Form() {
  return (
    <View style={FormStyles.container}>
      <Text style={FormStyles.text}>Form</Text>
    </View>
  );
}
const FormStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.warningBackground,
  },
  text: {
    fontSize: 100,
  },
});

export default function ProfilUser(props) {
  const [info, setInfo] = useState(true);
  const [qualification, setQualification] = useState(false);
  const [activite, setActivite] = useState(false);
  const [form, setForm] = useState(false);
  const Affiche = () => {
    if (info) {
      return <Info />;
    }
    if (qualification) {
      return <Qualification />;
    }
    if (activite) {
      return <Activite />;
    }
    if (form) {
      return <Form />;
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageView}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Prenom</Text>
          <Text style={styles.text}>Nom</Text>
          <Text style={styles.textDateHeader}>Cree Feb 2020</Text>
        </View>
      </View>
      <View style={styles.NavBar}>
        <TouchableOpacity
          onPress={() => {
            if (info) setInfo(info);
            else {
              setInfo(!info);
              setQualification(false);
              setActivite(false);
              setForm(false);
            }
          }}
        >
          <Text style={info ? styles.texttextNavBarOnpress : styles.textNavBar}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (qualification) setQualification(qualification);
            else {
              setInfo(false);
              setQualification(!qualification);
              setActivite(false);
              setForm(false);
            }
          }}
        >
          <Text
            style={
              qualification ? styles.texttextNavBarOnpress : styles.textNavBar
            }
          >
            Qualification
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (activite) setActivite(activite);
            else {
              setInfo(false);
              setQualification(false);
              setActivite(!activite);
              setForm(false);
            }
          }}
        >
          <Text
            style={activite ? styles.texttextNavBarOnpress : styles.textNavBar}
          >
            Activité
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (form) setForm(form);
            else {
              setInfo(false);
              setQualification(false);
              setActivite(false);
              setForm(!form);
            }
          }}
        >
          <Text style={form ? styles.texttextNavBarOnpress : styles.textNavBar}>
            Form
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Affiche />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    alignItems: "center",
    backgroundColor: Colors.DODGER_BLUE,
    paddingLeft: 15,
  },
  NavBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.tintColor,
  },
  imageView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    paddingRight: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.tintColor,
  },
  textView: {
    paddingTop: 5,
    height: "100%",
    width: 220,
    flexDirection: "column",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.tintColor,
  },
  textDateHeader: {
    fontSize: 12,
    color: Colors.WHITE,
    marginTop: 15,
  },
  texttextNavBarOnpress: {
    fontSize: 13,
    fontWeight: "bold",
    color: Colors.DODGER_BLUE,
  },
  textNavBar: {
    fontSize: 12,
    opacity: 0.5,
    color: Colors.tintColor,
  },
});
