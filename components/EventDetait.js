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
import Colors from "../constants/Colors";
import { Button } from "react-native-elements";
import image from "../assets/images/Profile.png";
import { MaterialIcons } from "@expo/vector-icons";
import FormTextInput from "../components/FormTextInput";

export default function EventDetail({ route, navigation }) {
  const { title } = route.params;
  const { description } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageView}>
          <Image
            source={{
              uri:
                "https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.TitleView}>
          <Text style={styles.titleText}> Social Entrepreneurship </Text>
        </View>

        <View style={styles.Organization}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri:
                  "https://pbs.twimg.com/profile_images/1210618202457292802/lt9KD2lt_400x400.jpg",
              }}
              style={styles.OrganizationLogo}
            />
            <Text style={styles.OrganizationText}>FSB</Text>
          </View>
          <View>
            <Button title="Abonné" type="outline" />
          </View>
        </View>
        <View style={styles.EventDate}>
          <MaterialIcons name="event" size={25} color={Colors.tintColor} />
          <View style={{ paddingLeft: 15 }}>
            <Text
              style={{ paddingBottom: 10, fontSize: 16, fontWeight: "bold" }}
            >
              Ven Avr 17,2020
            </Text>
            <Text>17:00 - 22:00 </Text>
          </View>
        </View>
        <View style={styles.EventDate}>
          <MaterialIcons
            name="location-on"
            size={25}
            color={Colors.tintColor}
          />
          <View style={{ paddingLeft: 15 }}>
            <Text
              style={{ paddingBottom: 10, fontSize: 16, fontWeight: "bold" }}
            >
              Bizerte
            </Text>
            <Text>Faculte de science de bizerte</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.ButtonFooter}>
          <Text style={{fontSize: 16, fontWeight: "bold",color:Colors.WHITE}}>Participer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonFooter}>
          <Text style={{fontSize: 16, fontWeight: "bold",color:Colors.WHITE}}>Organisé</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    width: "100%",
    height: 200,
    paddingTop: 20,
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 200,
    borderRadius: 5,
    borderColor: Colors.tintColor,
    borderWidth: 1,
  },
  titleText: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  TitleView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  Organization: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
  },
  OrganizationLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  OrganizationText: {
    fontSize: 17,
    paddingLeft: 10,
  },
  EventDate: {
    height: 80,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 15,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "space-between",
    backgroundColor: Colors.WHITE,
  },
  ButtonFooter: {
    marginBottom: 5,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: Colors.DODGER_BLUE,
    width: 120,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
