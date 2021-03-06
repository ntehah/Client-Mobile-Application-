import * as React from "react";
import profileimage from "../assets/images/logo.png";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
export default function Cart(props) {
  let date =Date.parse(props.date);
  var d = new Date(date);
  return (
    <View style={styles.Cart}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.textCart}>
        <View style={styles.date}>
          <Text style={styles.textJour}>{d.getDate()}</Text>
          <Text style={styles.textMois}> {d.toDateString().substring(4,7).toUpperCase()} </Text>
        </View>
        <View style={styles.textCartNameEtCity}>
          <Text style={styles.textNameAndCity}>{props.name}</Text>
          <Text style={styles.textNameAndCity}>
            {" "}
            {props.debut.substring(0, 5)}  -  {props.city}{" "}
          </Text>
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
