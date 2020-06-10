import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import image from "../../assets/images/Profile.png";
import Colors from "../../constants/Colors";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Cart from "../../components/Cart";
import { UrlServer } from "../../constants/UrlServer";

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
    eventIcon: true,
    aboutIcon: false,
    image: null,
    name: "",
    nbMembre: 0,
    nbEvents: 0,
    description: "",
    loading: true,
  };
  componentDidMount() {
    this.getProfile();
  }
  getProfile = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "organization/getprofil", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: EMAIL,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(DEMO_TOKEN);
        this.setState({
          image: data.photo,
          name: data.name,
          nbMembre: 0,
          nbEvents: 0,
          description: data.description,
          loading: false,
        });
      })

      .done();
  };
  OnclickIconEvent = () => {
    this.setState({ eventIcon: true, aboutIcon: false });
  };
  OnclickAboutIcon = () => {
    this.setState({ aboutIcon: true, eventIcon: false });
  };

  render() {
    let l = this.state.loading;
    return (
      <ScrollView style={styles.container}>
        {l ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 300,
            }}
          >
            <ActivityIndicator size="large" color={Colors.BLACK} />
          </View>
        ) : (
          <View>
            <View style={styles.header}>
              <View style={styles.imageView}>
                <Image
                  source={{ uri: this.state.image }}
                  style={styles.image}
                />
              </View>
              <View style={styles.title}>
                <Text style={styles.titleText}>{this.state.name}</Text>
              </View>
              <View style={styles.MemberAndEvents}>
                <Text style={styles.textNumber}>{this.state.nbMembre} </Text>
                <Text style={styles.text}>Member </Text>
                <Text style={styles.textNumber}>{this.state.nbEvents} </Text>
                <Text style={styles.text}>Events</Text>
              </View>
              <View>
                <Text style={styles.text}>{this.state.description}</Text>
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
          </View>
        )}
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
    marginBottom: 10,
  },
});

export default ProfilScreen;
