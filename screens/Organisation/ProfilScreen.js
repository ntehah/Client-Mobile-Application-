import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import image from "../../assets/images/Profile.png";
import Colors from "../../constants/Colors";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Cart from "../../components/Cart";

function Events(props) {
  return (
    <View>
      <View style={styles.Cart}>
        <Cart />
      </View>
      <View style={styles.Cart}>
        <Cart />
      </View>
      <View style={styles.Cart}>
        <Cart />
      </View>
    </View>
  );
}
function About(props) {
  return (
    <View>
      <Text>about</Text>
    </View>
  );
}

class ProfilScreen extends React.Component {
  state = {
    type: "Volunteer",
    eventIcon: true,
    aboutIcon: false,
  };

  OnclickIconEvent = () => {
    this.setState({ eventIcon: true, aboutIcon: false });
  };
  OnclickAboutIcon = () => {
    this.setState({ aboutIcon: true, eventIcon: false });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageView}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>GoldStar</Text>
          </View>
          <View style={styles.MemberAndEvents}>
            <Text style={styles.textNumber}>2 </Text>
            <Text style={styles.text}>Member </Text>
            <Text style={styles.textNumber}>2 </Text>
            <Text style={styles.text}>Events</Text>
          </View>
          <View>
            <Text style={styles.text}>
              GoldStar is a football club play in Premier League with great
              players
            </Text>
          </View>
        </View>
        <View style={styles.BarIcons}>
          <TouchableOpacity
            style={styles.EventIcon}
            onPress={this.OnclickIconEvent}
          >
            <MaterialCommunityIcons
              name="eventbrite"
              size={30}
              color={
                this.state.eventIcon
                  ? Colors.tabIconSelected
                  : Colors.tabIconDefault
              }
            />
            <Text>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.EventIcon}
            onPress={this.OnclickAboutIcon}
          >
            <AntDesign
              name="infocirlceo"
              size={30}
              color={
                this.state.aboutIcon
                  ? Colors.tabIconSelected
                  : Colors.tabIconDefault
              }
            />
            <Text>à propos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.display}>
          {this.state.eventIcon ? <Events /> : <About />}
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
    height: 250,
    marginTop: 30,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.tintColor,
  },
  title: {
    height: 30,
    width: "100%",
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    color: Colors.DODGER_BLUE,
  },
  imageView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  MemberAndEvents: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  textNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginRight: 4,
  },
  BarIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 3,
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
  },
  EventIcon: {
    width: "50%",
    alignItems: "center",
  },
  display: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  Cart: {
    borderColor: Colors.tintColor,
    borderWidth: 0.3,
    borderRadius: 19,
    marginBottom:10,
  },
});

export default ProfilScreen;
