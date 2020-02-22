import React from "react";
import { Image, StyleSheet, View, Text,KeyboardAvoidingView } from "react-native";
import { ButtonDefault, ButtonInscription } from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../assets/images/logo.png";
import Colors from "../constants/Colors";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleEmailChange = email => {
    this.setState({ email: email });
  };

  handlePasswordChange = password => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    console.log(this.state.email);
    console.log(this.state.password);
    console.log("Login button pressed");
  };
  handleInscriptionPress = () => {
    console.log("Inscription button pressed");
    this.props.navigation.navigate("inscription");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.header}></View>
        {/* <Text style={styles.connexion}>Connexion</Text> */}
        <KeyboardAvoidingView behavior="padding" style={styles.form}>
          <FormTextInput
            placeHolder="Email"
            nameIcon="user"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />
          <FormTextInput
            placeHolder="Mot de Pass"
            nameIcon="eye"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            secureTextEntry={true}
          />
          <ButtonDefault label="Connexion" onPress={this.handleLoginPress} />
          <ButtonInscription
            label="Inscription"
            onPress={this.handleInscriptionPress}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
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

export default SignIn;
