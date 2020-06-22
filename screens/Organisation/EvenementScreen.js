import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  ActivityIndicator,
} from "react-native";
import Colors from "../../constants/Colors";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import EventDetait from "../../components/EventDetait";
import ModifierEvenement from "./ModifierEvenement";
import { UrlServer } from "../../constants/UrlServer";
import Cart from "../../components/Cart";

const Stack = createStackNavigator();

function ListEvent(props) {
  const [DataEv, setDataEv] = useState({});
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })

      .done();
  };
  DeleteEvent = async (id) => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    fetch(UrlServer + "evenement/deleteevent", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    }).done();
  };
  function handleEvent(eve) {
    props.navigation.navigate("EventDetait", {
      address: eve.adress,
      date: eve.date,
      titre: eve.titre,
      debut: eve.debut,
      description: eve.description,
      fin: eve.fin,
      city: eve.city,
      organizationName: eve.organization.name,
      photoEvent: eve.photo,
      photoOrganization: eve.organization.photo,
    });
  }
  function handleModifierEvent(eve) {
    props.navigation.navigate("ModifierEvenement", {
      id: eve.id,
      address1: eve.adress,
      date1: eve.date,
      titre1: eve.titre,
      debut1: eve.debut,
      description1: eve.description,
      fin1: eve.fin,
      city1: eve.city,
      photoEvent1: eve.photo,
    });
  }
  function handleSupprimerEvent(id) {
    Alert.alert(
      "Evénement!!!",
      "Voulez vous supprimer l'événement ?",
      [
        {
          text: "Supprimer",
          onPress: () => {
            setLoading(true);
            GetEvents();
            DeleteEvent(id);
          },
        },
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false },
    );
  }
  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 300,
          }}
        >
          <ActivityIndicator size="large" color={Colors.BLACK} />
        </View>
      ) : (
        <View>
          {DataEv.length ? (
            <View>
              {DataEv.map((eve, index) => {
                return (
                  <View key={index} style={styles.cartView}>
                    <TouchableOpacity onPress={() => handleEvent(eve)}>
                      <Cart
                        image={eve.photo}
                        name={eve.titre}
                        debut={eve.debut}
                        city={eve.city}
                        date={eve.date}
                      />
                    </TouchableOpacity>
                    <View style={styles.buttonView}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleModifierEvent(eve)}
                      >
                        <Text style={styles.text}>Modifier</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.buttonSupprimer}
                        onPress={() => handleSupprimerEvent(eve.id)}
                      >
                        <Text style={styles.text}>Supprimer</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          ) : (
            <View>
              <Text>Non evenement</Text>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}
export default function EvenementScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ListEvent" component={ListEvent} />
      <Stack.Screen name="EventDetait" component={EventDetait} />
      <Stack.Screen name="ModifierEvenement" component={ModifierEvenement} />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,

    backgroundColor: "white",
  },
  cartView: {
    borderColor: Colors.tintColor,
    borderWidth: 0.3,
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.DODGER_BLUE,
    borderRadius: 20,
  },
  buttonSupprimer: {
    width: "40%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.TORCH_RED,
    borderRadius: 20,
  },
  text: {
    color: Colors.WHITE,
    textAlign: "center",
    fontWeight: "bold",
    height: 20,
  },
});
