import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import Cart from "../../components/Cart";
import CartOrganization from "../../components/CartOrganization";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilScreen from "../Organisation/ProfilScreen";
import EventDetaitFromVolunteer from "../../components/EventDetailFromVolunteer";
import { UrlServer } from "../../constants/UrlServer";
import { Ionicons } from "@expo/vector-icons";


export default function Activities() {
    const [DataEv, setDataEv] = useState({});
    const [Eve, setEve] = useState({});
    const [loading, setLoading] = useState(true);
    const [Org, setOrg] = useState({});
  
    useEffect(() => {
    //   GetEvents();
    }, []);
    GetEvents = async () => {
      var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
      var EMAIL = await AsyncStorage.getItem("email");
  
      fetch(UrlServer + "evenement/getactivity", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + DEMO_TOKEN,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: EMAIL,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
        //   setDataEv(data);
        console.log(data)
        })
  
        .done(() => setLoading(false));
    };
    function handleEvent() {
      props.navigation.navigate("EventDetaitFromVolunteer", {
        address: Eve.address,
        id:Eve.id,
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
      <View>
        {loading ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 200,
            }}
          >
            <ActivityIndicator size="large" color={Colors.BLACK} />
          </View>
        ) : (
          <View style={styles.prochain}>

            <ScrollView contentContainerStyle={{ paddingLeft:25, }}>
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
                        style={styles.Card}
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
                <View></View>
              )}
            </ScrollView>
          </View>
        )}
      </View>
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
      flexDirection: "row",
    },
    buttonHeader: {
      marginTop: 22,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    notificationCart: {
      height: 40,
      width: "100%",
      alignItems: "flex-end",
      justifyContent: "center",
      paddingRight: 10,
    },
    notification: {
      height: "100%",
      width: 40,
      borderColor: Colors.GREEN,
      borderWidth: 1,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
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
    },
  });
  