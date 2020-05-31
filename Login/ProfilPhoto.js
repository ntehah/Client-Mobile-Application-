import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import Colors from "../constants/Colors";
import { VolunteerInscription } from "../Services/VolunteerInscription";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

export default function ProfilPhoto({ navigation }) {
  const [photo, setphoto] = useState(null);
  const [state, InscriptionContext] = useContext(VolunteerInscription);
  useEffect(() => {
    getPermissionAsync();
  });
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
    // data.append("photo", {
    //     name: photo.fileName,
    //     type: photo.type,
    //     uri:
    //       Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    //   });
    InscriptionContext.ProfilPhoto(photo);
    navigation.navigate("Qualification");

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
