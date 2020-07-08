import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { CheckBox } from "react-native-elements";
import FormTextInput from "../../components/FormTextInput";
import Colors from "../../constants/Colors";
import { UrlServer } from "../../constants/UrlServer";
import { AuthContext } from "../../Services/AuthContext";
import DateTimePicker from "react-native-modal-datetime-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default function ModifierProfile(props) {
  const [state, authContext] = React.useContext(AuthContext);
  const [photo, setphoto] = useState(null);
  const [NomEtPrenom, setNomEtPrenom] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [ConfirmerPass, setConfirmerPass] = useState("");
  const [ValidNomEtPrenom, setValidNomEtPrenom] = useState(true);
  const [ValidEmail, setValidEmail] = useState(true);
  const [ValidPass, setValidPass] = useState(true);
  const [ValidConfirmerPass, setValidConfirmerPass] = useState(true);
  //   ================================================================
  const [Numero, setNumero] = useState("");
  const [Adresse, setAdress] = useState("");
  const [ValidNumero, setValidNumero] = useState(false);
  const [ValidAdresse, setValidAdress] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  //==========================================================
  const initialValue = [{ qualifacation: "" }];
  const [Skills, setSkills] = useState(initialValue);
  const [skill, setskill] = useState("");
  //===================================================================
  const [LundiMatin, setLundiMatin] = useState(false);
  const [LundiApresMidi, setLundiApresMidi] = useState(false);
  const [LundiSoiree, setLundiSoiree] = useState(false);
  //------------------------------------------------------
  const [MardiMatin, setMardiMatin] = useState(false);
  const [MardiApresMidi, setMardiApresMidi] = useState(false);
  const [MardiSoiree, setMardiSoiree] = useState(false);
  //-------------------------------------------------------
  const [MercrediMatin, setMercrediMatin] = useState(false);
  const [MercrediApresMidi, setMercrediApresMidi] = useState(false);
  const [MercrediSoiree, setMercrediSoiree] = useState(false);
  //-------------------------------------------------------
  const [JeudiMatin, setJeudiMatin] = useState(false);
  const [JeudiApresMidi, setJeudiApresMidi] = useState(false);
  const [JeudiSoiree, setJeudiSoiree] = useState(false);
  //-------------------------------------------------------
  const [VendrediMatin, setVendrediMatin] = useState(false);
  const [VendrediApresMidi, setVendrediApresMidi] = useState(false);
  const [VendrediSoiree, setVendrediSoiree] = useState(false);
  //-------------------------------------------------------
  const [SamediMatin, setSamediMatin] = useState(false);
  const [SamediApresMidi, setSamediApresMidi] = useState(false);
  const [SamediSoiree, setSamediSoiree] = useState(false);
  //-------------------------------------------------------
  const [DimancheMatin, setDimancheMatin] = useState(false);
  const [DimancheApresMidi, setDimancheApresMidi] = useState(false);
  const [DimancheSoiree, setDimancheSoiree] = useState(false);
  //-------------------------------------------------------
  const [loading, setLoading] = useState(true);
  //-------------------------------------------------------

  useEffect(() => {
    setProfile();
  }, []);
  setProfile = () => {
    let date1 = Date.parse(props.Data.date_naissance);
    setNomEtPrenom(props.Data.name);
    setphoto(props.Data.photo);
    setEmail(props.Data.email);
    setAdress(props.Data.address);
    setDate(new Date(date1));
    setNumero(props.Data.numero);
    setSkills(props.Data.qualifacations);

    let cal = props.Data.calendrier;
    for (var i in cal) {
      var item = cal[i];
      if (item.journame == "lundi") {
        setLundiMatin(item.matin);
        setLundiApresMidi(item.midi);
        setLundiSoiree(item.soir);
      }
      if (item.journame == "mardi") {
        setMardiMatin(item.matin);
        setMardiApresMidi(item.midi);
        setMardiSoiree(item.soir);
      }
      if (item.journame == "mercredi") {
        setMercrediMatin(item.matin);
        setMercrediApresMidi(item.midi);
        setMercrediSoiree(item.soir);
      }
      if (item.journame == "jeudi") {
        setJeudiMatin(item.matin);
        setJeudiApresMidi(item.midi);
        setJeudiSoiree(item.soir);
      }
      if (item.journame == "vendredi") {
        setVendrediMatin(item.matin);
        setVendrediApresMidi(item.midi);
        setVendrediSoiree(item.soir);
      }
      if (item.journame == "samedi") {
        setSamediMatin(item.matin);
        setSamediApresMidi(item.midi);
        setSamediSoiree(item.soir);
      }
      if (item.journame == "dimanche") {
        setDimancheMatin(item.matin);
        setDimancheApresMidi(item.midi);
        setDimancheSoiree(item.soir);
      }
    }
    setLoading(false);
  };
  //=======================================================
  const validateEmail = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase());
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
  //==========================================================
  removeSkill = (value) => {
    let filteredArray = Skills.filter(
      (item) => item.qualifacation !== value.qualifacation,
    );
    Alert.alert(
      "Qualification!!!",
      "Voulez vous supprimer qualification ?",
      [
        {
          text: "Supprimer",
          onPress: () => {
            setSkills(filteredArray);
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
  //==========================================================
  const ModifierVolunteer = async () => {
    let QualificationString = JSON.stringify(Skills);
    let calendrierString = JSON.stringify({
      lundi: {
        matin: LundiMatin,
        apresmidi: LundiApresMidi,
        soire: LundiSoiree,
      },
      mardi: {
        matin: MardiMatin,
        apresmidi: MardiApresMidi,
        soire: MardiSoiree,
      },
      mercredi: {
        matin: MercrediMatin,
        apresmidi: MercrediApresMidi,
        soire: MercrediSoiree,
      },
      jeudi: {
        matin: JeudiMatin,
        apresmidi: JeudiApresMidi,
        soire: JeudiSoiree,
      },
      vendredi: {
        matin: VendrediMatin,
        apresmidi: VendrediApresMidi,
        soire: VendrediSoiree,
      },
      samedi: {
        matin: SamediMatin,
        apresmidi: SamediApresMidi,
        soire: SamediSoiree,
      },
      dimanche: {
        matin: DimancheMatin,
        apresmidi: DimancheApresMidi,
        soire: DimancheSoiree,
      },
    });
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    console.log(date.getTime());
    fetch(UrlServer + "volunteer/modifier", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adress: Adresse,
        calendrier: calendrierString,
        numero: Numero,
        email: Email,
        dateDeNaissance: date.getTime(),
        photo: photo,
        qualification: QualificationString,
        name: NomEtPrenom,
        password: Pass,
        id: props.Data.id,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .done(() => {
        Alert.alert(
          "Profile!!!",
          "Votre profile a ete modifier ",
          [
            {
              text: "Ok",
              onPress: () => {
                setLoading(false);
              },
            },
          ],
          { cancelable: false },
        );
      });
  };
  const SupprimerVolunteer = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "volunteer/supprimer", {
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
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .done(() => {
        authContext.signOut();
      });
  };
  const ModifierHandler = () => {
    setLoading(true);
    ModifierVolunteer();
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
            SupprimerVolunteer();
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
    <View>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 200,
          }}
        >
          <ActivityIndicator size="large" color={Colors.BLACK} />
        </View>
      ) : (
        <View style={Styles.container}>
          <View style={Styles.header}>
            {photo && <Image source={{ uri: photo }} style={Styles.image} />}
            <TouchableOpacity style={Styles.ButtonImage} onPress={_pickImage}>
              <Text>Change photo</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 20 }}>
            <KeyboardAvoidingView>
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
                placeHolder=" Nouveau Mot de pass"
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
                placeHolder="Confirmer mot de passe"
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
            </KeyboardAvoidingView>
          </View>
          <View>
            <View style={Styles.InputContainer}>
              <KeyboardAvoidingView>
                <FormTextInput
                  placeHolder="Numéro téléphone "
                  nameIcon="mobile"
                  onChangeText={(text) => {
                    setNumero(text);
                    if (text.length > 7) {
                      setValidNumero(true);
                    }
                  }}
                  value={Numero}
                  autoCompleteType="tel"
                  keyboardType="phone-pad"
                />
              </KeyboardAvoidingView>
              <KeyboardAvoidingView>
                <FormTextInput
                  placeHolder="adresse"
                  nameIcon="location"
                  onChangeText={(text) => {
                    setAdress(text);
                    if (text.length > 4) {
                      setAdress(text);
                      setValidAdress(true);
                    }
                  }}
                  value={Adresse}
                  autoCompleteType="street-address"
                />
              </KeyboardAvoidingView>
              <View style={Styles.DateEventView}>
                <Text style={Styles.text}>Date de Naissance :</Text>
                <Text style={Styles.text}>
                  {date.getDate()} - {date.getMonth()} - {date.getFullYear()}
                </Text>
                <View>
                  <TouchableOpacity
                    onPress={() => setIsDatePickerVisible(true)}
                  >
                    <MaterialCommunityIcons
                      name="timetable"
                      size={30}
                      color="black"
                    />
                  </TouchableOpacity>
                  <DateTimePicker
                    isVisible={isDatePickerVisible}
                    onConfirm={(date) => {
                      setDate(date);
                      setIsDatePickerVisible(false);
                    }}
                    onCancel={() => setIsDatePickerVisible(false)}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={Styles.Skills}>
              <Text style={InfoStyles.textTitle}>Compétences</Text>
              <View style={Styles.skillTab}>
                {Skills.map((s, index) => (
                  <TouchableOpacity key={index} onPress={() => removeSkill(s)}>
                    <View style={Styles.skill}>
                      <Text style={Styles.text}>{s.qualifacation}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
              <View>
                <View style={Styles.AddNote}>
                  <KeyboardAvoidingView>
                    <FormTextInput
                      placeHolder="compétences"
                      nameIcon="man"
                      onChangeText={(text) => setskill(text)}
                      value={skill}
                    />
                  </KeyboardAvoidingView>
                  <View style={Styles.ButtonViewNote}>
                    <TouchableOpacity
                      style={Styles.ButtonNote}
                      onPress={() => {
                        if (skill != "")
                          setSkills((Skills) => [
                            ...Skills,
                            { qualifacation: skill },
                          ]);
                        setskill("");
                      }}
                    >
                      <Text>Ajouter</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View style={InfoStyles.TitleView}>
                <Text style={InfoStyles.textTitle}>Emploi du temps</Text>
              </View>
              <View style={InfoStyles.Availability}>
                <View style={InfoStyles.isAvailable}>
                  <Text style={InfoStyles.text}>Matin</Text>
                  <Text style={InfoStyles.text}>Après midi</Text>
                  <Text style={InfoStyles.text}>Soirée</Text>
                </View>
                <View style={InfoStyles.Jour}>
                  <Text style={InfoStyles.textJour}>Lundi</Text>
                  <CheckBox
                    containerStyle={InfoStyles.CheckBox}
                    checked={LundiMatin}
                    onPress={() => {
                      setLundiMatin(!LundiMatin);
                    }}
                  />
                  <CheckBox
                    checked={LundiApresMidi}
                    onPress={() => {
                      setLundiApresMidi(!LundiApresMidi);
                    }}
                  />
                  <CheckBox
                    checked={LundiSoiree}
                    onPress={() => {
                      setLundiSoiree(!LundiSoiree);
                    }}
                  />
                </View>
                <View style={InfoStyles.Jour}>
                  <Text style={InfoStyles.textJour}>Mardi</Text>
                  <CheckBox
                    containerStyle={InfoStyles.CheckBox}
                    checked={MardiMatin}
                    onPress={() => {
                      setMardiMatin(!MardiMatin);
                    }}
                  />
                  <CheckBox
                    checked={MardiApresMidi}
                    onPress={() => {
                      setMardiApresMidi(!MardiApresMidi);
                    }}
                  />
                  <CheckBox
                    checked={MardiSoiree}
                    onPress={() => {
                      setMardiSoiree(!MardiSoiree);
                    }}
                  />
                </View>
                <View style={InfoStyles.Jour}>
                  <Text style={InfoStyles.textJour}>Mercredi</Text>
                  <CheckBox
                    containerStyle={InfoStyles.CheckBox}
                    checked={MercrediMatin}
                    onPress={() => {
                      setMercrediMatin(!MercrediMatin);
                    }}
                  />
                  <CheckBox
                    checked={MercrediApresMidi}
                    onPress={() => {
                      setMercrediApresMidi(!MercrediApresMidi);
                    }}
                  />
                  <CheckBox
                    checked={MercrediSoiree}
                    onPress={() => {
                      setMercrediSoiree(!MercrediSoiree);
                    }}
                  />
                </View>
                <View style={InfoStyles.Jour}>
                  <Text style={InfoStyles.textJour}>Jeudi</Text>
                  <CheckBox
                    containerStyle={InfoStyles.CheckBox}
                    checked={JeudiMatin}
                    onPress={() => {
                      setJeudiMatin(!JeudiMatin);
                    }}
                  />
                  <CheckBox
                    checked={JeudiApresMidi}
                    onPress={() => {
                      setJeudiApresMidi(!JeudiApresMidi);
                    }}
                  />
                  <CheckBox
                    checked={JeudiSoiree}
                    onPress={() => {
                      setJeudiSoiree(!JeudiSoiree);
                    }}
                  />
                </View>
                <View style={InfoStyles.Jour}>
                  <Text style={InfoStyles.textJour}>Vendredi</Text>
                  <CheckBox
                    containerStyle={InfoStyles.CheckBox}
                    checked={VendrediMatin}
                    onPress={() => {
                      setVendrediMatin(!VendrediMatin);
                    }}
                  />
                  <CheckBox
                    checked={VendrediApresMidi}
                    onPress={() => {
                      setVendrediApresMidi(!VendrediApresMidi);
                    }}
                  />
                  <CheckBox
                    checked={VendrediSoiree}
                    onPress={() => {
                      setVendrediSoiree(!VendrediSoiree);
                    }}
                  />
                </View>
                <View style={InfoStyles.Jour}>
                  <Text style={InfoStyles.textJour}>Samedi</Text>
                  <CheckBox
                    containerStyle={InfoStyles.CheckBox}
                    checked={SamediMatin}
                    onPress={() => {
                      setSamediMatin(!SamediMatin);
                    }}
                  />
                  <CheckBox
                    checked={SamediApresMidi}
                    onPress={() => {
                      setSamediApresMidi(!SamediApresMidi);
                    }}
                  />
                  <CheckBox
                    checked={SamediSoiree}
                    onPress={() => {
                      setSamediSoiree(!SamediSoiree);
                    }}
                  />
                </View>
                <View style={InfoStyles.Jour}>
                  <Text style={InfoStyles.textJour}>Dimanche</Text>
                  <CheckBox
                    containerStyle={InfoStyles.CheckBox}
                    checked={DimancheMatin}
                    onPress={() => {
                      setDimancheMatin(!DimancheMatin);
                    }}
                  />
                  <CheckBox
                    checked={DimancheApresMidi}
                    onPress={() => {
                      setDimancheApresMidi(!DimancheApresMidi);
                    }}
                  />
                  <CheckBox
                    checked={DimancheSoiree}
                    onPress={() => {
                      setDimancheSoiree(!DimancheSoiree);
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: 20 }}></View>

          <View style={InfoStyles.ButtonViewContinue}>
            <TouchableOpacity style={Styles.Button} onPress={ModifierHandler}>
              <Text style={Styles.text}>Modifier</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={InfoStyles.ButtonSupprimer}
              onPress={SupprimerHandler}
            >
              <Text style={Styles.textSupprimer}>Supprimer Votre compte</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 100 }}></View>
        </View>
      )}
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    alignItems: "center",
    paddingLeft: 15,
    justifyContent: "space-between",
    paddingRight: 15,
  },
  DateEventView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
  },
  text: { color: Colors.tintColor, fontSize: 19, fontWeight: "100" },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.tintColor,
  },
  ButtonImage: {
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
  ButtonViewImage: {
    flexDirection: "row",
    justifyContent: "center",
  },
  InputContainer: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dateDeNaissance: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingTop: 20,
  },
  DateView: {
    flexDirection: "column",
    paddingLeft: 10,
  },
  Skills: {
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 20,
    paddingLeft: 10,
  },
  textSkill: {
    color: Colors.DODGER_BLUE,
    fontSize: 16,
  },
  skill: {
    borderColor: Colors.DODGER_BLUE,
    borderWidth: 2,
    borderRadius: 20,
    margin: 3,
    padding: 6,
  },
  skillTab: {
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
    paddingTop: 5,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.DODGER_BLUE,
  },
  ButtonNote: {
    width: "20%",
    height: 50,
    borderWidth: 1,
    borderColor: Colors.tintColor,
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonViewNote: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  AddNote: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 30,
    paddingLeft: 30,
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
});
const InfoStyles = StyleSheet.create({
  container: {},
  TitleView: {
    padding: 8,
  },
  row: {
    padding: 8,
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
  },
  text: {
    color: Colors.tintColor,
    fontSize: 14,
  },
  textTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.DODGER_BLUE,
  },
  Availability: {
    paddingLeft: 8,
  },
  isAvailable: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 122,
    paddingRight: 20,
  },
  textJour: {
    width: 100,
    color: Colors.tintColor,
    fontSize: 14,
  },
  Jour: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
  },
  textSupprimer: {
    fontSize: 18,
    fontWeight: "normal",
    color: Colors.TORCH_RED,
  },
  ButtonViewContinue: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
});
