import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { ButtonDefault } from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import Colors from "../constants/Colors";
import { AuthContext } from "../Services/AuthContext";
import { UrlServer } from "../constants/UrlServer";

function BenevolatInscription(props) {
  const [state, authContext] = React.useContext(AuthContext);
  const [NomEtPrenom, setNomEtPrenom] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [ConfirmerPass, setConfirmerPass] = useState("");
  const [ValidNomEtPrenom, setValidNomEtPrenom] = useState(true);
  const [ValidEmail, setValidEmail] = useState(true);
  const [ValidPass, setValidPass] = useState(true);
  const [ValidConfirmerPass, setValidConfirmerPass] = useState(true);
  const validateEmail = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase());
  };
  async function Login() {
    fetch(UrlServer + "auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usernameOrEmail: Email,
        password: Pass,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === undefined) {
          authContext.signUp(data, Email);
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
  }

  function Submit() {
    if (
      ValidNomEtPrenom &&
      ValidEmail &&
      ValidPass &&
      ValidConfirmerPass &&
      NomEtPrenom.length &&
      Email.length &&
      Pass.length &&
      ConfirmerPass.length
    ) {
      fetch(UrlServer + "auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: NomEtPrenom,
          username: NomEtPrenom,
          email: Email,
          password: Pass,
          role: "ROLE_VOLUNTEER",
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.success === true) {
            Login();
            props.navigation.navigate("Information", { email: Email,name:NomEtPrenom });
          } else {
            console.log(data);
            Alert.alert(
              "Login",
              " problème de serveur ",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false },
            );
          }
        });
    } else {
      // Alert.alert(
      //   "Login",
      //   " verifier les champs ",
      //   [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      //   { cancelable: false },
      // );
    }
  }
  return (
    <ScrollView
      style={{ paddingTop: 70 }}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={64}>
        <FormTextInput
          placeHolder="Nom et Prenom"
          nameIcon={ValidNomEtPrenom ? "user" : "circle-with-cross"}
          ColorIcon={ValidNomEtPrenom ? Colors.BLACK : Colors.TORCH_RED}
          onChangeText={(text) => {
            setNomEtPrenom(text);
            if (text.length < 8) setValidNomEtPrenom(false);
            else {
              setValidNomEtPrenom(true);
            }
          }}
          value={NomEtPrenom}
        />
        <FormTextInput
          placeHolder="Email"
          nameIcon={ValidEmail ? "email" : "circle-with-cross"}
          ColorIcon={ValidEmail ? Colors.BLACK : Colors.TORCH_RED}
          onChangeText={(text) => {
            setEmail(text);
            if (!validateEmail(text)) setValidEmail(false);
            else {
              setValidEmail(true);
            }
          }}
          value={Email}
        />
        <FormTextInput
          placeHolder="Mot de pass"
          nameIcon={ValidPass ? "lock" : "circle-with-cross"}
          ColorIcon={ValidPass ? Colors.BLACK : Colors.TORCH_RED}
          onChangeText={(text) => {
            setPass(text);
            setValidConfirmerPass(false);
            if (text.length < 7) setValidPass(false);
            else {
              setValidPass(true);
            }
          }}
          secureTextEntry={true}
          value={Pass}
        />

        <FormTextInput
          placeHolder="confirmer mot de passe"
          nameIcon={ValidConfirmerPass ? "lock" : "circle-with-cross"}
          ColorIcon={ValidConfirmerPass ? Colors.BLACK : Colors.TORCH_RED}
          onChangeText={(text) => {
            setConfirmerPass(text);
            if (text === Pass) setValidConfirmerPass(true);
            else {
              setValidConfirmerPass(false);
            }
          }}
          secureTextEntry={true}
          value={ConfirmerPass}
        />

        <ButtonDefault label="Rejoignez-nous" onPress={Submit} />
      </KeyboardAvoidingView>
      <View style={{ height: 400 }}></View>
    </ScrollView>
  );
}
function AssociationInscription(props) {
  const [state,authContext] = React.useContext(AuthContext);
  const [NomEtPrenom, setNomEtPrenom] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [ConfirmerPass, setConfirmerPass] = useState("");
  const [ValidNomEtPrenom, setValidNomEtPrenom] = useState(true);
  const [ValidEmail, setValidEmail] = useState(true);
  const [ValidPass, setValidPass] = useState(true);
  const [ValidConfirmerPass, setValidConfirmerPass] = useState(true);
  const validateEmail = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase());
  };
  function Login() {
    fetch(UrlServer + "auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usernameOrEmail: Email,
        password: Pass,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === undefined) {
          authContext.signUp(data, Email);
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
  }
  function Submit() {
    if (
      ValidNomEtPrenom &&
      ValidEmail &&
      ValidPass &&
      ValidConfirmerPass &&
      NomEtPrenom.length &&
      Email.length &&
      Pass.length &&
      ConfirmerPass.length
    ) {
      fetch(UrlServer + "auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: NomEtPrenom,
          username: NomEtPrenom,
          email: Email,
          password: Pass,
          role: "ROLE_ORGANIZATION",
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.success === true) {
            Login();
            props.navigation.navigate("About", { email: Email,name:NomEtPrenom });
          } else {
            console.log(data);
            Alert.alert(
              "Login",
              " problème de serveur ",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false },
            );
          }
        });
    } else {
      Alert.alert(
        "Login",
        " verifier les champs ",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false },
      );
    }
  }
  return (
    <ScrollView
      style={{ paddingTop: 70 }}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={64}>
        <FormTextInput
          placeHolder="Nom de l'association"
          nameIcon={ValidNomEtPrenom ? "calendar" : "circle-with-cross"}
          ColorIcon={ValidNomEtPrenom ? Colors.BLACK : Colors.TORCH_RED}
          onChangeText={(text) => {
            setNomEtPrenom(text);
            if (text.length < 8) setValidNomEtPrenom(false);
            else {
              setValidNomEtPrenom(true);
            }
          }}
          value={NomEtPrenom}
        />
        <FormTextInput
          placeHolder="Email"
          nameIcon={ValidEmail ? "email" : "circle-with-cross"}
          ColorIcon={ValidEmail ? Colors.BLACK : Colors.TORCH_RED}
          onChangeText={(text) => {
            setEmail(text);
            if (!validateEmail(text)) setValidEmail(false);
            else {
              setValidEmail(true);
            }
          }}
          value={Email}
        />
        <FormTextInput
          placeHolder="Mot de pass"
          nameIcon={ValidPass ? "lock" : "circle-with-cross"}
          ColorIcon={ValidPass ? Colors.BLACK : Colors.TORCH_RED}
          onChangeText={(text) => {
            setPass(text);
            setValidConfirmerPass(false);
            if (text.length < 7) setValidPass(false);
            else {
              setValidPass(true);
            }
          }}
          secureTextEntry={true}
          value={Pass}
        />

        <FormTextInput
          placeHolder="confirmer mot de passe"
          nameIcon={ValidConfirmerPass ? "lock" : "circle-with-cross"}
          ColorIcon={ValidConfirmerPass ? Colors.BLACK : Colors.TORCH_RED}
          onChangeText={(text) => {
            setConfirmerPass(text);
            if (text === Pass) setValidConfirmerPass(true);
            else {
              setValidConfirmerPass(false);
            }
          }}
          secureTextEntry={true}
          value={ConfirmerPass}
        />

        <ButtonDefault label="Rejoignez-nous" onPress={Submit} />
      </KeyboardAvoidingView>
      <View style={{ height: 400 }}></View>
    </ScrollView>
  );
}

export default function SignUp({ navigation }) {
  const [ButtonBenevolat, setButtonBenevolat] = useState(true);
  const [ButtonAssociation, setButtonAssociation] = useState(false);

  AssociationPress = () => {
    setButtonAssociation(true);
    setButtonBenevolat(false);
  };
  BenevolatPress = () => {
    setButtonAssociation(false);
    setButtonBenevolat(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={ButtonBenevolat ? styles.buttonSimple : styles.buttonShow}
          onPress={BenevolatPress}
        >
          <Text style={ButtonAssociation ? styles.text2 : styles.text}>
            Bénévolat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ButtonAssociation ? styles.buttonSimple : styles.buttonShow}
          onPress={AssociationPress}
        >
          <Text style={ButtonAssociation ? styles.text : styles.text2}>
            association
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        {ButtonBenevolat ? (
          <BenevolatInscription navigation={navigation} />
        ) : (
          <AssociationInscription navigation={navigation} />
        )}
      </View>
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
