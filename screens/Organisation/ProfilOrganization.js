import React,{useState,useEffect} from "react";
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
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Cart from "../../components/Cart";
import { UrlServer } from "../../constants/UrlServer";
import { Col } from "native-base";
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
  return (
    <ScrollView>
      {loading ? (
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
          {dataCart.map((v, index) => {
            return (
              <View style={stylesDemands.Cart} key={index}>
                <Image source={{ uri: v.image }} style={styles.image} />
                <View style={stylesDemands.TextAndButtons}>
                <View style={stylesDemands.TextNameAndEmail}>
                  <Text style={stylesDemands.text}>{v.name}</Text>
                  <Text style={stylesDemands.text}>{v.email}</Text>
                </View>
                <View style={stylesDemands.ButtonsView}>
                  <TouchableOpacity style={stylesDemands.Button}>
                    <Text>Confirm</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={stylesDemands.Button}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                </View>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
}
const stylesDemands = StyleSheet.create({
  Cart: {
    width: "100%",
    height:100,
    flexDirection: "row",
    backgroundColor: Colors.WHITE,
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 80,
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
    height:100,
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  TextNameAndEmail: {
    flexDirection: "column",
    justifyContent:"space-between",
    height:50,
    paddingBottom:10,
  },
  ButtonsView: {
    alignItems: "center",
    flexDirection:"row",
    justifyContent: "space-between",
    height:50,
    backgroundColor:Colors.GREEN,
  },
  Button: {
    height: 40,
    borderRadius: 15,
    backgroundColor: Colors.BLUE,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: Colors.BLUE,
  },
});
export default class ProfilOrganization extends React.Component {
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
                <Text style={styles.textNumber}>0</Text>
                <Text style={styles.text}>Member </Text>
                <Text style={styles.textNumber}>0 </Text>
                <Text style={styles.text}>Events</Text>
              </View>
              <View>
                <Text style={styles.text}>{this.state.description}</Text>
              </View>
            </View>
            <View style={styles.BarIcons}>
            
              <TouchableOpacity style={styles.EventIcon}>
                <MaterialCommunityIcons
                  name="eventbrite"
                  size={30}
                  color={Colors.tabIconSelected}
                />
                <Text>Events</Text>
              </TouchableOpacity>
            </View>
              <Demands/>
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
