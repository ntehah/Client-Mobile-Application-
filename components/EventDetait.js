import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function EventDetail({ route }) {
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
  DescriptionView: {
    paddingLeft: 15,
  },
});
