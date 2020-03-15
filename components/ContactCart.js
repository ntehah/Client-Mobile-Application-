import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import image from "../assets/images/Profile.png";

export default function ContactCart(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>Nom et Prenom</Text>
        
      </View>
      <View style={styles.IconView}>
        <AntDesign
          name="right"
          size={25}
          color={Colors.tintColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    borderRadius: 10,
    height: 80,
    marginTop: 20,
    marginLeft: "5%",
    alignItems: "center",
    borderWidth:1,
    borderColor:Colors.tintColor,
  },
  imageView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth:2,
    borderColor:Colors.tintColor,
  },
  textView: {
    paddingTop:5,
    height:"100%",
    width:220,
    flexDirection: "column",
  },
  text: {
    fontSize: 16,
    fontFamily: "space-mono",
    color: Colors.tintColor,
  },
  IconView:{
    width:30,
    height:"100%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  }
});
