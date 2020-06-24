import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import profileimage from "../assets/images/logo.png";

export default function TacheCard(props) {
  //   let date =Date.parse(props.date);
  //   var d = new Date(date);
  return (
    <View style={styles.Cart}>
      <View style={styles.header}>
        <Image source={profileimage} style={styles.image} />
        <Text>userName</Text>
      </View>
      <View style={styles.titre}>
        <Text style={styles.textTitle}>Ajouter une tache</Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.textDescription}>
          If you check the react-native-vector-icons repo, there is a new icon
          bundle which named Fontisto. You have two options right now, simply
          fork the
        </Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.textDate}>Date limite : </Text>
          <Text style={styles.textDate}>{props.date}</Text>
        </View>
        <View style={styles.state}>
        <Text style={styles.textState}>{props.state}</Text>
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
    backgroundColor: Colors.GREEN,
    marginTop: 30,
    marginRight: 20,
    marginLeft: 36,
    borderRadius: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderWidth: 0.3,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
  },
  titre: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  description: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
  },
  textDescription: {
    fontSize: 14,
    fontWeight: "normal",
    color: Colors.WHITE,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    paddingTop:10,

  },
  textDate: {
    fontSize: 14,
    fontWeight: "normal",
    color: Colors.WHITE,
  },
  textState: {
    fontSize: 16,
    fontWeight: "normal",
    color: Colors.WHITE,
  },
  state:{
      borderRadius:10,
      borderBottomLeftRadius:0,
      borderBottomEndRadius:0,
      height:"100%",
      width:80,
      backgroundColor:Colors.STATE,
      alignItems:"center",
      justifyContent:"center",
  }
});
