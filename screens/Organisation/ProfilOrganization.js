import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import Colors from "../../constants/Colors";
import { MaterialCommunityIcons, Entypo, Foundation } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ContactDetail from "../../components/ContactDetail";
import { UrlServer } from "../../constants/UrlServer";
import { createStackNavigator } from "@react-navigation/stack";
function Events() {
  return (
    <View>
      {/* <View style={styles.Cart}>
        <Cart />
      </View>
      <View style={styles.Cart}>
        <Cart />
      </View>
      <View style={styles.Cart}>
        <Cart />
      </View> */}
    </View>
  );
}

function Demands(props) {
  const [volunteers, setVolunteers] = useState([]);
  const [dataCart, setDataCart] = useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    getDemands();
  }, []);
  getDemands = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    console.log(EMAIL);
    fetch(UrlServer + "volunteer/demands", {
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
        for (var i in data) {
          var item = data[i];
          setDataCart((dataCart) => [
            ...dataCart,
            {
              id: item.id,
              name: item.name,
              email: item.email,
              image: item.photo,
            },
          ]);
          setVolunteers((volunteers) => [
            ...volunteers,
            {
              id: item.id,
              name: item.name,
              email: item.email,
              image: item.photo,
              numero: item.numero,
              address: item.address,
              date_naissance: item.date_naissance,
              photo: item.photo,
              calendrier: item.calendrier,
              qualifacations: item.qualifacations,
              activites: item.activites,
            },
          ]);
        }
        setLoading(false);
      })
      .done();
  };
  DetailProfile = (id) => {
    var array = volunteers;
    console.log(id);
    for (var i in array) {
      var item = array[i];
      if (item.id === id) {
        props.navigation.navigate("ContactDetail", item);
      }
    }
  };
  return (
    <ScrollView>
      {loading ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <ActivityIndicator size="large" color={Colors.DODGER_BLUE} />
        </View>
      ) : (
        <View>
          {dataCart.map((v, index) => {
            return (
              <TouchableOpacity onPress={() => DetailProfile(v.id)} key={index}>
                <View style={stylesDemands.Cart}>
                  <Image source={{ uri: v.image }} style={styles.image} />
                  <View style={stylesDemands.TextAndButtons}>
                    <View style={stylesDemands.TextNameAndEmail}>
                      <Text style={stylesDemands.textName}>{v.name}</Text>
                      <Text style={stylesDemands.textEmail}>{v.email}</Text>
                    </View>
                    <View style={stylesDemands.ButtonsView}>
                      <TouchableOpacity style={stylesDemands.Button}>
                        <Text style={stylesDemands.textButton}>Confirm</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={stylesDemands.ButtonSupprimer}>
                        <Text style={stylesDemands.textButton}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
}

class ProfilOrganization extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventIcon: true,
      aboutIcon: false,
      image: null,
      name: "",
      nbMembre: 0,
      nbEvents: 0,
      description: "",
      loading: true,
    };
  }

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
        this.setState({
          image: data.photo,
          name: data.name,
          nbMembre: data.nbMembre,
          nbEvents: data.nbEvents,
          description: data.description,
          loading: false,
        });
      })

      .done();
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.loading ? (
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
                <Text style={styles.textNumber}>{this.state.nbMembre}</Text>
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
                onPress={() => {
                  this.setState({ eventIcon: true, aboutIcon: false });
                }}
              >
                <Foundation
                  name="social-500px"
                  size={30}
                  color={
                    this.state.eventIcon
                      ? Colors.DODGER_BLUE
                      : Colors.tabIconDefault
                  }
                />
                <Text
                  style={
                    this.state.eventIcon
                      ? styles.textIconSelected
                      : styles.textIconUnSelected
                  }
                >
                  Social médias
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.EventIcon}
                onPress={() => {
                  this.setState({ eventIcon: false, aboutIcon: true });
                }}
              >
                <Entypo
                  name="users"
                  size={30}
                  color={
                    this.state.eventIcon
                      ? Colors.tabIconDefault
                      : Colors.DODGER_BLUE
                  }
                />
                <Text
                  style={
                    this.state.eventIcon
                      ? styles.textIconUnSelected
                      : styles.textIconSelected
                  }
                >
                  Demandes
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              {this.state.eventIcon ? (
                <Events />
              ) : (
                <Demands navigation={this.props.navigation} />
              )}
            </View>
            <View style={{ height: 80 }}></View>
          </View>
        )}
      </ScrollView>
    );
  }
}

const Stack = createStackNavigator();
export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilOrganization"
        component={ProfilOrganization}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: Colors.WHITE,
          },
          headerTintColor: Colors.tintColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="ContactDetail"
        component={ContactDetail}
        options={{
          title: "Profile Bénévole",
          headerStyle: {
            backgroundColor: Colors.WHITE,
          },
          headerTintColor: Colors.tintColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitle: "Retour",
        }}
      />
    </Stack.Navigator>
  );
}
const stylesDemands = StyleSheet.create({
  Cart: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    backgroundColor: Colors.WHITE,
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: "30%",
    height: 80,
    borderWidth: 1,
    borderColor: Colors.BLUE,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  TextAndButtons: {
    flexDirection: "column",
    alignItems: "center",
    height: 100,
    width: "70%",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  TextNameAndEmail: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 50,
    width: "100%",
    paddingBottom: 10,
  },
  ButtonsView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  Button: {
    height: 40,
    width: "45%",
    borderRadius: 15,
    backgroundColor: Colors.DODGER_BLUE,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonSupprimer: {
    height: 40,
    width: "45%",
    borderRadius: 15,
    backgroundColor: Colors.tabIconDefault,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textName: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.tintColor,
  },
  textEmail: {
    fontSize: 16,
    fontWeight: "normal",
    color: Colors.tintColor,
  },
  textButton: {
    fontSize: 17,
    fontWeight: "normal",
    color: Colors.WHITE,
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
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
  textIconSelected: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.DODGER_BLUE,
  },
  textIconUnSelected: {
    fontSize: 17,
    fontWeight: "normal",
    color: Colors.tabIconDefault,
  },
});
