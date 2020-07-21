import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity ,ActivityIndicator,AsyncStorage} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { UrlServer } from "../constants/UrlServer";
import { MaterialIcons } from "@expo/vector-icons";

export default function EventDetailFromVolunteer({ route, navigation, props }) {
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
    id
  } = route.params;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  participe = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "evenement/participe", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: EMAIL,
        id: id,
      }),
    }).done();
  };
  Handleparticiper = () => {
    // participe();
  };
  return (
    <View style={styles.container}>
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
        <View>
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
                  style={{
                    paddingBottom: 10,
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
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
                  style={{
                    paddingBottom: 10,
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {city}
                </Text>
                <Text>{address}</Text>
              </View>
            </View>
            <View style={styles.DescriptionView}>
              <Text
                style={{ paddingBottom: 10, fontSize: 17, fontWeight: "bold" }}
              >
                Description
              </Text>
              <Text
                style={{
                  paddingBottom: 10,
                  fontSize: 15,
                  fontWeight: "normal",
                }}
              >
                {description}
              </Text>
            </View>
            <View style={{height:150,}}></View>
          </ScrollView>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.ButtonFooter}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: Colors.WHITE,
                }}
                onPress={Handleparticiper}
              >
                Participer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonFooter}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: Colors.WHITE,
                }}
              >
                Organisé
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
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
