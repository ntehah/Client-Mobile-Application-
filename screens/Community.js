import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, EvilIcons,AntDesign } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import ContactCart from "../components/ContactCart";
import ContactDetail from "../components/ContactDetail";

export default function Community() {
  return (
    <View>
      <View style={styles.inputHeader}>
        <View style={styles.TextInput}>
          <EvilIcons name="search" size={35} color={Colors.tintColor} />
          <TextInput style={styles.Input} placeholder="recherche"></TextInput>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.icon}>
          <MaterialCommunityIcons
            name="email-plus"
            size={25}
            color={Colors.tintColor}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <MaterialCommunityIcons
            name="message-text"
            size={25}
            color={Colors.tintColor}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <MaterialCommunityIcons
            name="plus"
            size={25}
            color={Colors.tintColor}
          />
        </TouchableOpacity>
        <View style={styles.iconClose}>
          <TouchableOpacity onPress={()=> {
            
          }}>
            <AntDesign name="closecircleo" size={25} color={Colors.WHITE} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <ContactDetail/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    height:"83%",
  },
  contentContainer: {
    paddingTop: 1,
  },
  inputHeader: {
    justifyContent: "flex-end",
    alignItems: "center",
    height: "15%",
    backgroundColor: "#fafafa",
    paddingBottom:10,
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
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 30,
    backgroundColor:"#fafafa",
    // paddingRight: "5%",
    borderBottomColor:Colors.tintColor,
    borderBottomWidth:1,
  },
  icon:{
    marginRight:15,
  },
  iconClose:{
    height:"100%",
    width:"100%",
    justifyContent:"flex-start",
    paddingTop:2,
    paddingLeft:10,

  },
});
