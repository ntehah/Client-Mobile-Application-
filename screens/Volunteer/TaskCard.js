import * as React from "react";
import { Image, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
export default function TaskCard(props) {
  modifier = () => {
    props.navigation.navigate("ModifierTask",{
      titre1:props.titre,
      description1:props.description,
      date1:props.date,
      id:props.id,
      state:props.state
    });
  };
  return (
    <View style={styles.Cart}>
      <View style={styles.header}>
        <View style={styles.headerUser}>
          <Image source={{ uri: props.photovol }} style={styles.image} />
          <Text style={styles.textTitleEvent}>{props.namevol}</Text>
        </View>
        <TouchableOpacity onPress={modifier}>
          <AntDesign name="edit" size={30} color="#070707" />
        </TouchableOpacity>
      </View>
      <View style={styles.titre}>
        <Text style={styles.textTitle}>{props.titre}</Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.textDescription}>
        {props.description}
        </Text>
      </View>
      <View style={styles.evenementView}>
        <Text style={styles.textEvent}>Evénement: </Text>
        <Image source={{ uri: props.photoEve }} style={styles.image} />
        <Text style={styles.textTitleEvent}>{props.nameEve}</Text>
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
    width: 300,
    flexDirection: "column",
    backgroundColor: Colors.BLUE,
    marginTop: 30,
    marginRight: 20,
    marginLeft: 36,
    borderRadius: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor:Colors.BLUE,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    paddingRight: 10,
  },
  headerUser: {
    flexDirection: "row",
    alignItems: "center",
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
    paddingTop: 10,
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
  state: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomEndRadius: 0,
    height: "100%",
    width: 80,
    backgroundColor: "#58A4B0",
    alignItems: "center",
    justifyContent: "center",
  },
  evenementView: {
    paddingTop: 10,
    flexDirection: "row",
    height: 50,
    marginTop:10,
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textEvent: {
    paddingLeft: 10,
    fontSize: 17,
    fontWeight: "bold",
    color: "#070707",
  },
  textTitleEvent: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#070707",
  },
});
