import * as React from "react";
import profileimage from "../assets/images/logo.png";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
export default function Cart(props) {
  return (
    <View style={styles.Cart}>
      <Image source={profileimage} style={styles.image} />
      <View style={styles.textCart}>
        <View style={styles.date}>
          <Text style={styles.textJour}> 31 </Text>
          <Text style={styles.textMois}> DEC </Text>
        </View>
        <View style={styles.textCartNameEtCity}>
          <Text style={styles.textNameAndCity}> Nom Event </Text>
          <Text style={styles.textNameAndCity}> 5: 00 PM - City here </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Cart: {
    height: 180,
    width: 300,
    flexDirection: "column",
  },
  image: {
    width: 299,
    height: 120,
    borderWidth: 0.3,
    borderRadius: 10,
  },
  textCart: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    height: 60,
    width: 70,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  textJour: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textMois: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.TORCH_RED,
  },
  textCartNameEtCity: {
    flexDirection: "column",
  },
  textNameAndCity: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  },
});
