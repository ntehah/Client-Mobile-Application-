import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Activities from "./Activities"
import Colors from "../../constants/Colors";
import { AuthContext } from "../../Services/AuthContext";
import { UrlServer } from "../../constants/UrlServer";
import ModifierProfile from "./ModifierProfile";
function Info(props) {
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
  const [AddNote, setAddNote] = useState(false);
  const [Note, setNote] = useState("");
  //-------------------------------------------------------

  const [Email, setEmail] = useState("");
  const [Numero, setNumero] = useState("");
  const [Address, setAddress] = useState("");
  const [Date, setDate] = useState("");

  //-------------------------------------------------------
  useEffect(() => {
    setProfile();
  }, []);
  setProfile = () => {
    setEmail(props.Data.email);
    setAddress(props.Data.address);
    setDate(props.Data.date_naissance);
    setNumero(props.Data.numero);
    let cal = props.calendrier;
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
  };
  return (
    <View>
      <View style={InfoStyles.TitleView}>
        <Text style={InfoStyles.textTitle}>Information</Text>
      </View>

      <View style={InfoStyles.row}>
        <Text style={InfoStyles.text}>Email: </Text>
        <Text style={InfoStyles.text}>{Email}</Text>
      </View>
      <View style={InfoStyles.row}>
        <Text style={InfoStyles.text}>Numero: </Text>
        <Text style={InfoStyles.text}>{Numero}</Text>
      </View>
      <View style={InfoStyles.row}>
        <Text style={InfoStyles.text}>Address: </Text>
        <Text style={InfoStyles.text}>{Address}</Text>
      </View>
      <View style={InfoStyles.row}>
        <Text style={InfoStyles.text}>Date de naissance: </Text>
        <Text style={InfoStyles.text}>{Date}</Text>
      </View>
      <View></View>
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
          <CheckBox containerStyle={InfoStyles.CheckBox} checked={LundiMatin} />
          <CheckBox checked={LundiApresMidi} />
          <CheckBox checked={LundiSoiree} />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Mardi</Text>
          <CheckBox containerStyle={InfoStyles.CheckBox} checked={MardiMatin} />
          <CheckBox checked={MardiApresMidi} />
          <CheckBox checked={MardiSoiree} />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Mercredi</Text>
          <CheckBox
            containerStyle={InfoStyles.CheckBox}
            checked={MercrediMatin}
          />
          <CheckBox checked={MercrediApresMidi} />
          <CheckBox checked={MercrediSoiree} />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Jeudi</Text>
          <CheckBox containerStyle={InfoStyles.CheckBox} checked={JeudiMatin} />
          <CheckBox checked={JeudiApresMidi} />
          <CheckBox checked={JeudiSoiree} />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Vendredi</Text>
          <CheckBox
            containerStyle={InfoStyles.CheckBox}
            checked={VendrediMatin}
          />
          <CheckBox checked={VendrediApresMidi} />
          <CheckBox checked={VendrediSoiree} />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Samedi</Text>
          <CheckBox
            containerStyle={InfoStyles.CheckBox}
            checked={SamediMatin}
          />
          <CheckBox checked={SamediApresMidi} />
          <CheckBox checked={SamediSoiree} />
        </View>
        <View style={InfoStyles.Jour}>
          <Text style={InfoStyles.textJour}>Dimanche</Text>
          <CheckBox
            containerStyle={InfoStyles.CheckBox}
            checked={DimancheMatin}
          />
          <CheckBox checked={DimancheApresMidi} />
          <CheckBox checked={DimancheSoiree} />
        </View>
      </View>
      <View style={{ height: 100 }} />
    </View>
  );
}
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
  CheckBox: {},
  Note: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  ButtonView: {
    marginTop: 10,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  Button: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: Colors.tintColor,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    color: Colors.TORCH_RED,
    fontSize: 14,
  },
  AddNote: {
    paddingRight: 30,
    paddingLeft: 30,
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
    padding: 4,
  },
  ButtonViewNote: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
function Qualification(props) {
  return (
    <View style={QualificationStyles.container}>
      <View style={QualificationStyles.Skills}>
        <Text style={QualificationStyles.textTitle}>Compétences</Text>
        <View style={QualificationStyles.skillTab}>
          {props.Skills.map((s, index) => (
            <View style={QualificationStyles.skill} key={index}>
              <Text style={QualificationStyles.text}>{s.qualifacation}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
const QualificationStyles = StyleSheet.create({
  container: {},
  Skills: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 8,
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
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.DODGER_BLUE,
  },
  IconAdd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 6,
  },
  Affectations: {
    marginLeft: 10,
  },
});
function Activite() {
  return (
    <View style={ActiviteStyles.container}>
      <Activities/>
    </View>
  );
}
const ActiviteStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
  },
});

export default function ProfilUser({ navigation }) {
  const [state, authContext] = React.useContext(AuthContext);
  const [info, setInfo] = useState(true);
  const [qualification, setQualification] = useState(false);
  const [activite, setActivite] = useState(false);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState(false);
  const [Data, setData] = useState({});
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={SignOutHundler}
        >
          <MaterialCommunityIcons
            name="logout"
            size={24}
            color={Colors.DODGER_BLUE}
          />
          <Text style={{ color: Colors.DODGER_BLUE }}>Déconnexion</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  useEffect(() => {
    getProfile();
  }, []);
  getProfile = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "volunteer/getprofil", {
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
        setData(data);
        setLoading(false);
      })
      .done();
  };
  const Affiche = () => {
    if (info) {
      return <Info Data={Data} calendrier={Data.calendrier} />;
    }
    if (qualification) {
      return <Qualification Skills={Data.qualifacations} />;
    }
    if (activite) {
      return <Activite />;
    }
    if (form) {
      return <ModifierProfile Data={Data} navigation={navigation} />;
    }
  };

  const SignOutHundler = () => {
    authContext.signOut();
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color={Colors.BLACK} />
        </View>
      ) : (
        <View>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={()=>getProfile()}
              />
            }
          >
            <View style={styles.header}>
              <View style={styles.imageView}>
                <Image source={{ uri: Data.photo }} style={styles.image} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.text}>{Data.name}</Text>
                <Text style={styles.textDateHeader}>Cree Juin 2020</Text>
              </View>
            </View>
            <View style={styles.NavBar}>
              <TouchableOpacity
                onPress={() => {
                  if (info) setInfo(info);
                  else {
                    setInfo(!info);
                    setQualification(false);
                    setActivite(false);
                    setForm(false);
                  }
                }}
              >
                <Text
                  style={
                    info ? styles.texttextNavBarOnpress : styles.textNavBar
                  }
                >
                  Profile
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (qualification) setQualification(qualification);
                  else {
                    setInfo(false);
                    setQualification(!qualification);
                    setActivite(false);
                    setForm(false);
                  }
                }}
              >
                <Text
                  style={
                    qualification
                      ? styles.texttextNavBarOnpress
                      : styles.textNavBar
                  }
                >
                  Qualification
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (activite) setActivite(activite);
                  else {
                    setInfo(false);
                    setQualification(false);
                    setActivite(!activite);
                    setForm(false);
                  }
                }}
              >
                <Text
                  style={
                    activite ? styles.texttextNavBarOnpress : styles.textNavBar
                  }
                >
                  Activité
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (form) setForm(form);
                  else {
                    setInfo(false);
                    setQualification(false);
                    setActivite(false);
                    setForm(!form);
                  }
                }}
              >
                <Text
                  style={
                    form ? styles.texttextNavBarOnpress : styles.textNavBar
                  }
                >
                  Modifier
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Affiche />
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    alignItems: "center",
    backgroundColor: Colors.DODGER_BLUE,
    paddingLeft: 15,
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 15,
    height: 40,
  },
  NavBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.tintColor,
  },
  imageView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    paddingRight: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.tintColor,
  },
  textView: {
    paddingTop: 5,
    height: "100%",
    width: 220,
    flexDirection: "column",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.tintColor,
  },
  textDateHeader: {
    fontSize: 12,
    color: Colors.WHITE,
    marginTop: 15,
  },
  texttextNavBarOnpress: {
    fontSize: 13,
    fontWeight: "bold",
    color: Colors.DODGER_BLUE,
  },
  textNavBar: {
    fontSize: 12,
    opacity: 0.5,
    color: Colors.tintColor,
  },
});
