import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import image from "../assets/images/Profile.png";

export default function NotificationCart(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>Title Notification</Text>
        <Text style={styles.text}>Body Notification</Text>
        <Text style={styles.text}>20h</Text>
      </View>
      <View style={styles.IconView}>
        <MaterialIcons
          name="event-available"
          size={20}
          color={Colors.WHITE}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.MISCHKA,
    width: "90%",
    borderRadius: 10,
    height: 80,
    marginTop: 20,
    marginLeft: "5%",
    alignItems: "center",
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
