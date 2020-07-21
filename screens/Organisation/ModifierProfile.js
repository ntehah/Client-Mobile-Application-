import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  AsyncStorage,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import Colors from "../../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import FormTextInput from "../../components/FormTextInput";
import { UrlServer } from "../../constants/UrlServer";
import { AuthContext } from "../../Services/AuthContext";

export default function ModifierProfile({ navigation, route }) {
  const { email1, name1, id, description1, photo1 } = route.params;
  const [state, authContext] = useContext(AuthContext);

  const [photo, setphoto] = useState(photo1);
  const [description, setDescription] = useState(description1);
  const [email, setEmail] = useState(email1);
  const [name, setName] = useState(name1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    getPermissionAsync();
  });

  const ModifierOrganization = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    fetch(UrlServer + "organization/modifier", {
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
        name: name,
        id: id,
      }),
    })
      .then((response) => response.text())
      .then((data) => {})
      .done(() => {
        Alert.alert(
          "Profile!!!",
          "votre Profile a ete bien modifier",
          [
            {
              text: "Ok",
              onPress: () => {
                navigation.navigate("ProfilOrganization");
              },
            },
          ],
          { cancelable: false },
        );
      });
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
  const ModifierHandler = () => {
    setLoading(true);
    ModifierOrganization();
  };
  const SupprimerOrganisation = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    fetch(UrlServer + "volunteer/supprimer", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .done(() => {
        authContext.signOut();
      });
  };
  const SupprimerHandler = () => {
    Alert.alert(
      "Profile!!!",
      "Voulez vous supprimer votre Profile ?",
      [
        {
          text: "Supprimer",
          onPress: () => {
            setLoading(true);
            SupprimerOrganisation;
          },
        },
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false },
    );
  };
  return (
    <ScrollView style={Styles.container}>
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
          <View style={{ paddingRight: 10, paddingLeft: 10 }}>
            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset={64}
            >
              <FormTextInput
                placeHolder="Nom de l'organisation"
                nameIcon="calendar"
                onChangeText={(text) => {
                  setName(text);
                  if (text.length > 4) {
                    setName(text);
                  }
                }}
                value={name}
              />
              <FormTextInput
                placeHolder="Email"
                nameIcon="email"
                onChangeText={(text) => {
                  setEmail(text);
                  if (text.length > 4) {
                    setEmail(text);
                  }
                }}
                value={email}
              />
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
            </KeyboardAvoidingView>
          </View>
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
            <TouchableOpacity style={Styles.Button} onPress={_pickImage}>
              <Text>change photo</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.ButtonViewContinue}>
            <TouchableOpacity style={Styles.Button} onPress={ModifierHandler}>
              <Text style={Styles.text}>Modifier</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.ButtonSupprimer}
              onPress={SupprimerHandler}
            >
              <Text style={Styles.textSupprimer}>Supprimer Votre compte</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 100 }}></View>
        </View>
      )}
    </ScrollView>
  );
}
const Styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  textSupprimer: {
    fontSize: 14,
    fontWeight: "normal",
    color: Colors.TORCH_RED,
  },
  ButtonViewContinue: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  ButtonSupprimer: {
    width: 160,
    height: 40,
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    paddingTop: 3,
    paddingBottom: 2,
    paddingLeft: 10,
    shadowColor: Colors.TORCH_RED,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    width: 160,
    height: 40,
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    paddingTop: 3,
    paddingBottom: 2,
    paddingLeft: 10,
    shadowColor: Colors.BLUE,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: Colors.tintColor, fontSize: 19, fontWeight: "100" },
});
