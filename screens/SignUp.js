import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity,KeyboardAvoidingView } from "react-native";
import { ButtonDefault } from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import Colors from "../constants/Colors";
function BenevolatInscription() {
  return (
    <KeyboardAvoidingView behavior="padding">
      <FormTextInput placeHolder="Nom et Prenom" nameIcon="user" />
      <FormTextInput placeHolder="Email" nameIcon="email" />
      <FormTextInput placeHolder="Mot de pass" nameIcon="lock" />
      <FormTextInput placeHolder="confirmer mot de passe" nameIcon="lock" />

      <ButtonDefault label="Inscription" />
    </KeyboardAvoidingView>
  );
}
function AssociationInscription() {
  return (
    <KeyboardAvoidingView behavior="padding">
      <FormTextInput placeHolder="Nom de l'association" nameIcon="calendar" />
      <FormTextInput placeHolder="Email" nameIcon="email" />
      <FormTextInput placeHolder="Mot de pass" nameIcon="lock" />
      <FormTextInput placeHolder="confirmer mot de passe" nameIcon="lock" />

      <ButtonDefault label="Rejoignez-nous" />
    </KeyboardAvoidingView>
  );
}

class SignUp extends React.Component {
  state = {
    ButtonBenevolat: true,
    ButtonAssociation: false,
  };

  AssociationPress = () => {
    this.setState({
      ButtonAssociation: true,
      ButtonBenevolat: false,
    });
  };
  BenevolatPress = () => {
    this.setState({
      ButtonBenevolat: true,
      ButtonAssociation: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={
              this.state.ButtonBenevolat
                ? styles.buttonSimple
                : styles.buttonShow
            }
            onPress={this.BenevolatPress}
          >
            <Text style={
              this.state.ButtonAssociation
                ? styles.text2
                : styles.text
            }>Bénévolat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.ButtonAssociation
                ? styles.buttonSimple
                : styles.buttonShow
            }
            onPress={this.AssociationPress}
          >
            <Text style={
              this.state.ButtonAssociation
                ? styles.text
                : styles.text2
            }>association</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          {this.state.ButtonBenevolat ? (
            <BenevolatInscription />
          ) : (
            <AssociationInscription />
          )}
        </View>
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
    flexDirection: "row",
    backgroundColor: Colors.WHITE,
    height: 35,
  },
  buttonSimple: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonShow: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.tintColor,
    // borderRightColor: Colors.tintColor,
    // borderLeftColor: Colors.tintColor,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
  },
  text: {
    color: Colors.tintColor,
    fontSize: 20,
  },
  text2: {
    color: Colors.tintColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    marginTop: 20,
    width: 100,
    height: 100,
  },
});

export default SignUp;
