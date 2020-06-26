import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  AsyncStorage
} from "react-native";
import Colors from "../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import FormTextInput from "../components/FormTextInput";
import { OrganizationInscription } from "../Services/OrganizationInscription";
import { UrlServer } from "../constants/UrlServer";

export default function About({ navigation, route }) {
  const [photo, setphoto] = useState(null);
  const [description, setDescription] = useState("");
  const { email,name } = route.params;

  const [state, Context] = useContext(OrganizationInscription);
  useEffect(() => {
    getPermissionAsync();
  });
  const AddOrganization = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    fetch(UrlServer+"organization/ajouter", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
        email: email,
        photo: photo,
        name:name,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
      })
      .done();
  };
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        Alert.alert(
          "Sorry, we need camera roll permissions to make this work!",
        );
      }
    }
  };
  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        base64: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        let imageUri = result ? `data:image/jpg;base64,${result.base64}` : null;
        setphoto(imageUri);
      }
    } catch (E) {
      console.log(E);
    }
  };
  const ContinueHandler = () => {
    Context.aboutOrganization({
      photo: photo,
      description: description,
      email: email,
    });
    AddOrganization();
    // navigation.navigate("Welecome");
  };
  return (
    <ScrollView style={Styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 60,
        }}
      >
        {photo && (
          <Image
            source={{ uri: photo }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
            }}
          />
        )}
        <View style={{ height: 30 }}></View>
        <TouchableOpacity style={Styles.ButtonContinue} onPress={_pickImage}>
          <Text>Choose Photo</Text>
        </TouchableOpacity>
      </View>
      <FormTextInput
        placeHolder="Description"
        nameIcon="edit"
        onChangeText={(text) => {
          setDescription(text);
          if (text.length > 4) {
            setDescription(text);
          }
        }}
        value={description}
      />
      
      <View style={Styles.ButtonViewContinue}>
        <TouchableOpacity
          style={Styles.ButtonContinue}
          onPress={ContinueHandler}
        >
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const Styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  ButtonContinue: {
    width: "40%",
    height: 50,
    borderWidth: 1,
    borderColor: Colors.DODGER_BLUE,
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    color: Colors.DODGER_BLUE,
  },
  ButtonViewContinue: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
