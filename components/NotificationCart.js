import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import demand from "../assets/images/demand.png";
import task from "../assets/images/task.png";
export default function NotificationCart(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        {props.type === "DEMAND" ? (
          <Image source={demand} style={styles.image} />
        ) : (
          <Image source={task} style={styles.image} />
        )}
      </View>
      <View style={styles.textView}>
        <Text style={styles.textTitle}>{props.title}</Text>
        <Text style={styles.textBody}>{props.body}</Text>
        <Text style={styles.text}>{props.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor:"#0FA3B1",
    height: 120,
    marginTop: 20,
    alignItems: "center",
    paddingBottom:10,
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
    borderColor:Colors.BLUE,
    borderWidth:0.3,
    padding:5,
  },
  textView: {
    paddingTop: 5,
    height: "100%",
    width: 220,
    flexDirection: "column",
  },
  textBody: {
    fontSize: 16,
    color: Colors.tintColor,
    paddingBottom:5,
  },
  textTitle:{
    fontSize: 17,
    fontWeight:"bold",
    color: Colors.tintColor,
    paddingBottom:5,
  },
});
