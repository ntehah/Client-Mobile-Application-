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
import { getLightEstimationEnabled } from "expo/build/AR";

function Events(props) {
  return (
    <View>
      {/* <View style={styles.Cart}>
        <Cart />
      </View>
      <View style={styles.Cart}>
        <Cart />
      </View>
      <View style={styles.Cart}>
        <Cart />
      </View> */}
    </View>
  );
}
function About(props) {
  return (
    <View>
      <Text>about</Text>
    </View>
  );
}

export default function ProfilScreen({ route }) {
  const { image, name, description, email } = route.params;

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
        console.log(data);
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
            <Text style={styles.textNumber}>0</Text>
            <Text style={styles.text}>Member </Text>
            <Text style={styles.textNumber}>0 </Text>
            <Text style={styles.text}>Events</Text>
          </View>
          {etat ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  AddFollower();
                }}
              >
                <Text style={{ fontSize: 17 }}>Rejoignez-nous</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text>Deja Abonne</Text>
            </View>
          )}

          <View>
            <Text style={styles.text}>{description}</Text>
          </View>
        </View>
        <View style={styles.BarIcons}>
          <TouchableOpacity style={styles.EventIcon}>
            <MaterialCommunityIcons
              name="eventbrite"
              size={30}
              color={Colors.tabIconSelected}
            />
            <Text>Events</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.display}>
          <Events />
        </View>
      </View>
      {/* )} */}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
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
    marginBottom: 5,
  },
  textNumber: {
    fontSize: 18,
    fontWeight: "bold",
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
});
