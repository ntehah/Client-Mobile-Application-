import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  AsyncStorage,
  KeyboardAvoidingView,
} from "react-native";
import { ButtonDefault, ButtonInscription } from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../assets/images/logo.png";
import Colors from "../constants/Colors";
import { AuthContext } from "../Services/AuthContext";
import { UrlServer } from "../constants/UrlServer";
export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, authContext] = React.useContext(AuthContext);

  handleLoginPress = () => {
    fetch(UrlServer + "auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usernameOrEmail: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === undefined) {
          authContext.signIn(data, email);
        } else {
          console.log(data.status);
          Alert.alert(
            "Login",
            "Email ou mot de passe incorrect",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false },
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  handleInscriptionPress = () => {
    console.log("Inscription button pressed");
    navigation.navigate("inscription");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      {/* <Text style={styles.connexion}>Connexion</Text> */}
      <KeyboardAvoidingView behavior="padding" style={styles.form}>
        <FormTextInput
          placeHolder="Email"
          nameIcon="user"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <FormTextInput
          placeHolder="Mot de Pass"
          nameIcon="eye"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry={true}
        />
        <ButtonDefault label="Connexion" onPress={handleLoginPress} />
        <ButtonInscription
          label="Inscription"
          onPress={handleInscriptionPress}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "90%",
  },
  header: {
    width: "100%",
    backgroundColor: Colors.tintColor,
  },
  connexion: {
    color: Colors.BLACK,
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    marginTop: 20,
    width: "80%",
    height: 80,
  },
});
