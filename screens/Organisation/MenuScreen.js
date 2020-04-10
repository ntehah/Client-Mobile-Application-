import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import image from "../../assets/images/Profile.png";
import Colors from "../../constants/Colors";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Cart from "../../components/Cart";

class MenuScreen extends React.Component {
  state = {
    type: "Volunteer",
    AddIcon: true,
    InboxIcon: false,
    ContactIcon: false,
  };

  OnclickIconAdd = () => {
    this.setState({ AddIcon: true, InboxIcon: false, ContactIcon: false });
  };
  OnclickIconInbox = () => {
    this.setState({ AddIcon: false, InboxIcon: true, ContactIcon: false });
    S;
  };
  OnclickIconContact = () => {
    this.setState({ AddIcon: false, InboxIcon: false, ContactIcon: true });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.title}>
      <Text style={styles.textTitle}>Menu</Text>
      </View>
        <View style={styles.Buttons}>
          <TouchableOpacity style={styles.Button}>
            <Ionicons name="ios-add" size={40} color={Colors.DODGER_BLUE} />
            <Text style={styles.text}>Ajouter</Text>
            <Text style={styles.text}>Événement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <MaterialIcons
              name="event-available"
              size={35}
              color={Colors.DODGER_BLUE}
            />
            <Text style={styles.text}>Toutes les</Text>
            <Text style={styles.text}>Événements</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Buttons}>
          <TouchableOpacity style={styles.Button}>
            <Ionicons name="ios-document" size={30} color={Colors.DODGER_BLUE} />
            <Text style={styles.text}>Ajouter</Text>
            <Text style={styles.text}>Document</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <MaterialCommunityIcons
              name="file-document-box-multiple"
              size={30}
              color={Colors.DODGER_BLUE}
            />
            <Text style={styles.text}>Toutes les</Text>
            <Text style={styles.text}>Documents</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.DODGER_BLUE,
  },
  title:{
    paddingTop:50,
    paddingBottom:10,
    marginRight:15,
    marginLeft:15,
    borderBottomWidth:0.3,
    borderBottomColor:Colors.tintColor,
  },
  textTitle:{
    fontSize:30,
    fontWeight:"bold",
    color:Colors.WHITE,
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom:5,
  },
  Button: {
    width: 160,
    borderRadius: 15,
    marginTop: 40,
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
    paddingTop:3,
    paddingBottom:2,
    paddingLeft:10,
    shadowColor: '#0A369D',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: "normal",
    color: Colors.tintColor,
  },
});

export default MenuScreen;
