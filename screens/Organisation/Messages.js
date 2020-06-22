import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import image from "../../assets/images/Profile.png";
import Colors from "../../constants/Colors";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Cart from "../../components/Cart";

function Add(props) {
  return (
    <View>clea
      <Text>Add</Text>
    </View>
  );
}
function Inbox(props) {
  return (
    <View>
      <Text>Inbox</Text>
    </View>
  );
}
function Contact(props) {
  return (
    <View>
      <Text>Contact</Text>
    </View>
  );
}

class Messages extends React.Component {
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
  };
  OnclickIconContact = () => {
    this.setState({ AddIcon: false, InboxIcon: false, ContactIcon: true });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="format-list-bulleted"
                size={40}
                color={Colors.tintColor}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerBottom}>
            <TouchableOpacity onPress={this.OnclickIconAdd}>
              <Ionicons
                name="ios-add"
                size={40}
                color={
                  this.state.AddIcon
                    ? Colors.tabIconSelected
                    : Colors.tabIconDefault
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.OnclickIconInbox}>
              <Ionicons
                name="ios-archive"
                size={40}
                color={
                  this.state.InboxIcon
                    ? Colors.tabIconSelected
                    : Colors.tabIconDefault
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.OnclickIconContact}>
              <Ionicons
                name="ios-contacts"
                size={40}
                color={
                  this.state.ContactIcon
                    ? Colors.tabIconSelected
                    : Colors.tabIconDefault
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Main}>
          {this.state.AddIcon ? (
            <Add />
          ) : this.state.InboxIcon ? (
            <Inbox />
          ) : (
            <Contact />
          )}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 30,
  },
  headerTop: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 5,
    paddingLeft: 15,
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
  },
  headerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
    marginBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  Main: {
    backgroundColor: Colors.warningBackground,
  },
});

export default Messages;
