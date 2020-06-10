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
import Colors from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function EventDetail({ route, navigation,props }) {
  const {
    address,
    date,
    titre,
    debut,
    description,
    fin,
    city,
    organizationName,
    photoEvent,
    photoOrganization,
  } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageView}>
          <Image source={{ uri: photoEvent }} style={styles.image} />
        </View>
        <View style={styles.TitleView}>
          <Text style={styles.titleText}>{titre}</Text>
        </View>

        <View style={styles.Organization}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: photoOrganization,
              }}
              style={styles.OrganizationLogo}
            />
            <Text style={styles.OrganizationText}>{organizationName}</Text>
          </View>
          {/* <View>
            <TouchableOpacity style={styles.ButtonFollow}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: Colors.DODGER_BLUE,
                }}
              >
                Abonné
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={styles.EventDate}>
          <MaterialIcons name="event" size={25} color={Colors.tintColor} />
          <View style={{ paddingLeft: 15 }}>
            <Text
              style={{ paddingBottom: 10, fontSize: 16, fontWeight: "bold" }}
            >
              {date}
            </Text>
            <Text>
              {debut} - {fin}{" "}
            </Text>
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
              {city}
            </Text>
            <Text>{address}</Text>
          </View>
        </View>
        <View style={styles.DescriptionView}>
          <Text style={{ paddingBottom: 10, fontSize: 17, fontWeight: "bold" }}>
            Description
          </Text>
          <Text
            style={{ paddingBottom: 10, fontSize: 15, fontWeight: "normal" }}
          >
            {description}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.ButtonFooter}>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", color: Colors.WHITE }}
          >
            Participer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonFooter}>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", color: Colors.WHITE }}
          >
            Organisé
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingBottom: 55,
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
  ButtonFollow: {
    borderRadius: 5,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.DODGER_BLUE,
    borderWidth: 1,
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  DescriptionView: {
    paddingLeft: 15,
  },
});
