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
import ProfilScreen from "./ProfilScreen"
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
  render() {
    return (
        <View>
      {/* // {l ? (
      //     <View
      //       style={{
      //         flex: 1,
      //         justifyContent: "center",
      //         alignItems: "center",
      //         marginTop: 300,
      //       }}
      //     >
      //       <ActivityIndicator size="large" color={Colors.BLACK} />
      //     </View>
      //   ) :(<View>

      //   </View>)} */}
          <ProfilScreen state={this.state}/>
      </View>
    );
  }
}
