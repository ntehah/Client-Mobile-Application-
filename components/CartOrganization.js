import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
export default function CartOrganization(props) {
  return (
    <View style={styles.Cart}>
      <Image source={{ uri: props.image }}  style={styles.image} />
      <View style={styles.textCart}>
        <View style={styles.textCartNameEtCity}>
          <Text style={styles.textNameAndCity}>{props.name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Cart: {
    height: 250,
    width: 150,
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center",
  },
  image: {
    width: 120,
    height: 120,
    borderWidth: 0.3,
    borderRadius: 60,
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
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
  },
});
