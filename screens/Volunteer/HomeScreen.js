import React, { useState, useEffect } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import profileimage from "../../assets/images/logo.png";
import Colors from "../../constants/Colors";
import Cart from "../../components/Cart";
import CartOrganization from "../../components/CartOrganization";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilScreen from "../Organisation/ProfilScreen";
import EventDetait from "../../components/EventDetait";
const Stack = createStackNavigator();

import { UrlServer } from "../../constants/UrlServer";
function ListOrganization(props) {
  const [DataOr, setDataOr] = useState({});
  const [Org, setOrg] = useState({});

  useEffect(() => {
    GetAll();
  }, []);
  GetAll = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    fetch(UrlServer + "organization/getallorganization", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataOr(data);
      })

      .done();
  };
  function handleOrg() {
    props.navigation.navigate("organization", {
      image: Org.photo,
      name: Org.name,
      description: Org.description,
      email:Org.email,
    });
  }
  return (
    <View style={styles.prochain}>
      <View style={styles.textView}>
        <Text style={styles.textLeft}>Association</Text>
      </View>
      <ScrollView horizontal={true} style={styles.CardScrollView}>
        {DataOr.length ? (
          <View>
            {DataOr.map((org, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setOrg(org);
                    handleOrg();
                  }}
                  key={index}
                >
                  <CartOrganization image={org.photo} name={org.name} />
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <View>
            <Text>Non Organization</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
function ListEvent(props) {
  const [DataEv, setDataEv] = useState({});
  const [Eve, setEve] = useState({});
  const [loading, setLoading] = useState(true);
  const [Org, setOrg] = useState({});

  useEffect(() => {
    GetEvents();
  }, []);
  GetEvents = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    fetch(UrlServer + "evenement/getallevent", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataEv(data);
      })

      .done();
  };
  function handleEvent() {
    props.navigation.navigate("EventDetait", {
      address: Eve.address,
      date: Eve.date,
      titre: Eve.titre,
      debut: Eve.debut,
      description: Eve.description,
      fin: Eve.fin,
      city: Eve.city,
      organizationName: Org.name,
      photoEvent: Eve.photo,
      photoOrganization: Org.photo,
    });
  }
  return (
    <View style={styles.prochain}>
      <View style={styles.textView}>
        <Text style={styles.textLeft}>Evènement</Text>
      </View>
      <ScrollView horizontal={true} style={styles.CardScrollView}>
        {DataEv.length ? (
          <View>
            {DataEv.map((eve, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setOrg(eve.organization);
                    setEve(eve);
                    handleEvent();
                  }}
                >
                  <Cart
                    image={eve.photo}
                    name={eve.titre}
                    debut={eve.debut}
                    city={eve.city}
                    date={eve.date}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <View>
            <Text>Non Organization</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
function Container({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerContent}>
        {/* --------------------------------------Prochain Evènement-----------------------------------------------------*/}

        <ListEvent navigation={navigation} />
        {/* -------------------------------------------------------------------------------------------*/}
        {/* ------------------------------------Association--------------------------------------*/}
        <ListOrganization navigation={navigation} />
        {/* -------------------------------------------------------------------------------------------*/}
      </ScrollView>
    </View>
  );
}
export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Container"
        component={Container}
        options={{
          title: "Accueil",
          headerStyle: {
            backgroundColor: Colors.WHITE,
          },
          headerTintColor: Colors.tintColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="EventDetait"
        component={EventDetait}
        options={{
          title: "Evenement Description",
          headerStyle: {
            backgroundColor: Colors.WHITE,
          },
          headerTintColor: Colors.tintColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitle: "Retour",
        }}
      />
      <Stack.Screen
        name="organization"
        component={ProfilScreen}
        options={{
          title: "Evenement Description",
          headerStyle: {
            backgroundColor: Colors.WHITE,
          },
          headerTintColor: Colors.tintColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitle: "Retour",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerContent: {},
  header: {
    width: "100%",
    height: 120,
    // borderBottomColor: Colors.tintColor,
    // borderBottomWidth: 0.3,
    flexDirection: "column",
  },
  buttonHeader: {
    marginTop: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  profile: {
    marginRight: 10,
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: Colors.tintColor,
  },
  inputHeader: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  TextInput: {
    alignItems: "center",
    borderWidth: 0.3,
    borderRadius: 15,
    borderColor: Colors.tintColor,
    width: "90%",
    height: 35,
    flexDirection: "row",
  },
  Input: {
    width: "100%",
    height: "100%",
  },
  prochain: {
    marginTop: 10,
    marginBottom: 10,
    height: 220,
  },
  textView: {
    backgroundColor: "#fff",
    height: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textLeft: {
    fontSize: 17,
    marginLeft: 10,
    color: Colors.tintColor,
    opacity: 0.6,
  },
  textRight: {
    fontSize: 17,
    marginRight: 10,
    color: Colors.tintColor,
    opacity: 0.6,
  },
  Card: {
    borderColor: Colors.tintColor,
    borderWidth: 0.3,
    borderRadius: 10,
    height: 180,
    width: 300,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 3,
  },
  CardScrollView: {
    height: 200,
  },
});
