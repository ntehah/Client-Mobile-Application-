import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import Colors from "../../constants/Colors";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Cart from "../../components/Cart";
import { UrlServer } from "../../constants/UrlServer";

export default function ProfilScreen({ route }) {
  const { image, name, description, email, abo, eve } = route.params;

  const [etat, setEtat] = useState(true);
  useEffect(() => {
    getEtat();
  }, []);
  getEtat = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "volunteer/getabonne", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailvol: EMAIL,
        emailorg: email,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "true") setEtat(false);
      })

      .done();
  };
  AddFollower = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "volunteer/abonne", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailvol: EMAIL,
        emailorg: email,
        etat: "REQUEST",
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        setEtat(false);
      })

      .done();
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
          <View style={styles.imageView}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>{name}</Text>
          </View>
          <View style={styles.MemberAndEvents}>
            <Text style={styles.textNumber}>{abo}</Text>
            <Text style={styles.text}>Member </Text>
            <Text style={styles.textNumber}>{eve}</Text>
            <Text style={styles.text}>Events</Text>
          </View>
          <View style={styles.ButtonViewContinue}>
            {etat ? (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    AddFollower();
                  }}
                  style={styles.Button}
                >
                  <Text >Rejoignez-nous</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.ButtonDeja}>
                <Text>Deja Abonne</Text>
              </View>
            )}
          </View>
          <View style={{ paddingTop: 10 }}>
            <Text style={styles.text}>{description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  header: {
    marginTop: 30,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.tintColor,
  },
  title: {
    height: 30,
    width: "100%",
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    color: Colors.DODGER_BLUE,
  },
  imageView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  MemberAndEvents: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
  },
  textNumber: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    fontSize: 18,
    marginRight: 4,
  },
  BarIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 3,
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
  },
  EventIcon: {
    width: "50%",
    alignItems: "center",
  },
  display: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  Cart: {
    borderColor: Colors.tintColor,
    borderWidth: 0.3,
    borderRadius: 19,
    marginBottom: 10,
  },
  Button: {
    width: 160,
    height: 40,
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    paddingTop: 3,
    paddingBottom: 2,
    paddingLeft: 10,
    shadowColor: Colors.DODGER_BLUE,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonDeja: {
    width: 160,
    height: 40,
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    paddingTop: 3,
    paddingBottom: 2,
    paddingLeft: 10,
    shadowColor: Colors.tabIconSelected,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonViewContinue: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});
