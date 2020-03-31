import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import image from "../assets/images/Profile.png";

function Info() {
  return (
    <View style={InfoStyles.container}>
      <Text style={InfoStyles.text}>Info</Text>
    </View>
  );
}
const InfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.warningBackground,
  },
  text: {
    fontSize: 100,
  },
});
function Qualification() {
  return (
    <View style={QualificationStyles.container}>
      <Text style={QualificationStyles.text}>Qualification</Text>
    </View>
  );
}
const QualificationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.warningBackground,
  },
  text: {
    fontSize: 100,
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

export default function ContactDetail(props) {
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
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: "space-mono",
    color: Colors.tintColor,
  },
  textDateHeader: {
    fontSize: 12,
    fontFamily: "space-mono",
    color: Colors.WHITE,
    marginTop: 15,
  },
  texttextNavBarOnpress: {
    fontSize: 13,
    fontFamily: "space-mono",
    fontWeight: "bold",
    color: Colors.DODGER_BLUE,
  },
  textNavBar: {
    fontSize: 12,
    fontFamily: "space-mono",
    opacity: 0.5,
    color: Colors.tintColor,
  },
 
});
