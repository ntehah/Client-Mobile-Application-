import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import profileimage from "../assets/images/robot-dev.png";
import Colors from "../constants/Colors";
import Cart from "../components/Cart"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.buttonHeader}>
          <TouchableOpacity>
            <Ionicons name="md-locate" size={30} color={Colors.tintColor} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={profileimage} style={styles.profile} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputHeader}>
          <View style={styles.TextInput}>
            <EvilIcons name="search" size={35} color={Colors.tintColor} />
            <TextInput style={styles.Input} placeholder="recherche"></TextInput>
          </View>
        </View>
      </View>
      <ScrollView style={styles.containerContent}>
        {/* --------------------------------------Prochain Evènement-----------------------------------------------------*/}
        <View style={styles.prochain}>
          <View style={styles.textView}>
            <Text style={styles.textLeft}>Prochain Evènement</Text>
            <TouchableOpacity>
              <Text style={styles.textRight}>Voir tout</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={styles.CardScrollView}>
            <View style={styles.Card}>
            <TouchableOpacity>
            <Cart/>
            </TouchableOpacity>
            </View>
            <View style={styles.Card}></View>
            <View style={styles.Card}></View>
            <View style={styles.Card}></View>
          </ScrollView>
        </View>
        {/* -------------------------------------------------------------------------------------------*/}
        {/* ------------------------------------------Populaire----------------------------------------*/}
        <View style={styles.prochain}>
          <View style={styles.textView}>
            <Text style={styles.textLeft}>Populaire</Text>
            <TouchableOpacity>
              <Text style={styles.textRight}>Voir tout</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={styles.CardScrollView}>
            <View style={styles.Card}></View>
            <View style={styles.Card}></View>
            <View style={styles.Card}></View>
            <View style={styles.Card}></View>
          </ScrollView>
        </View>
        {/* -------------------------------------------------------------------------------------------*/}
        {/* ------------------------------------Association--------------------------------------*/}
        <View style={styles.prochain}>
          <View style={styles.textView}>
            <Text style={styles.textLeft}>Association</Text>
            <TouchableOpacity>
              <Text style={styles.textRight}>Voir tout</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={styles.CardScrollView}>
            <View style={styles.Card}></View>
            <View style={styles.Card}></View>
            <View style={styles.Card}></View>
            <View style={styles.Card}></View>
          </ScrollView>
        </View>
        {/* -------------------------------------------------------------------------------------------*/}
      </ScrollView>
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
    borderColor:Colors.tintColor,
    borderWidth: 0.3,
    borderRadius:10,
    height: 180,
    width: 300,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  CardScrollView: {
    height: 200,
  },
});
