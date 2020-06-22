import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Image,
  AsyncStorage,
} from "react-native";
import FormTextInput from "../../components/FormTextInput";
import Colors from "../../constants/Colors";
import DateTimePicker from "react-native-modal-datetime-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { UrlServer } from "../../constants/UrlServer";

import Constants from "expo-constants";
export default function ModifierEvenement({ route, navigation }) {
  const {
    address1,
    id,
    date1,
    titre1,
    debut1,
    description1,
    fin1,
    city1,
    photoEvent1,
  } = route.params;
  let date2 = Date.parse(date1);
  const [titre, setTitre] = useState(titre1);
  const [adress, setAdress] = useState(address1);
  const [date, setDate] = useState(new Date(date2));
  const [debut, setDebut] = useState(new Date());
  const [fin, setFin] = useState(new Date());
  const [city, setCity] = useState(city1);
  const [description, setDescription] = useState(description1);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isFinPickerVisible, setIsFinPickerVisible] = useState(false);
  const [photo, setphoto] = useState(photoEvent1);
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
  const AjouterVolunteer = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "evenement/ajouter", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        titre: titre,
        date: date.getTime(),
        debut: debut.getTime(),
        fin: fin.getTime(),
        city: city,
        adress: adress,
        photo: photo,
        description: description,
        email: EMAIL,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.status != undefined) {
          console.log(data);
        }
      })
      .done();
  };
  const AjouterEventHandler = () => {
    AjouterVolunteer();
    navigation.navigate("ListEvent")
  };
  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={64}>
        <FormTextInput
          placeHolder="Titre"
          nameIcon="text"
          ColorIcon={Colors.BLACK}
          onChangeText={(text) => {
            setTitre(text);
          }}
          value={titre}
        />
        <FormTextInput
          placeHolder="Adresse"
          nameIcon="address"
          ColorIcon={Colors.BLACK}
          onChangeText={(text) => {
            setAdress(text);
          }}
          value={adress}
        />
        <FormTextInput
          placeHolder="City"
          nameIcon="address"
          ColorIcon={Colors.BLACK}
          onChangeText={(text) => {
            setCity(text);
          }}
          value={city}
        />
      </KeyboardAvoidingView>
      <View style={styles.DateEventView}>
        <Text style={styles.text}>Date Evenement :</Text>
        <Text style={styles.text}>
          {date.getDate()} - {date.getMonth()} - {date.getFullYear()}
        </Text>
        <View>
          <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
            <MaterialCommunityIcons name="timetable" size={30} color="black" />
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

      <View style={styles.DateEventView}>
        <Text style={styles.text}>Debut Evenement :</Text>
        <Text style={styles.text}>
          {debut.getHours()}:{debut.getMinutes()}
        </Text>

        <View>
          <TouchableOpacity onPress={() => setIsTimePickerVisible(true)}>
            <MaterialCommunityIcons name="timetable" size={30} color="black" />
          </TouchableOpacity>
          <DateTimePicker
            mode="time"
            isVisible={isTimePickerVisible}
            onConfirm={(date) => {
              setDebut(date);
              setIsTimePickerVisible(false);
            }}
            onCancel={() => setIsTimePickerVisible(false)}
          />
        </View>
      </View>
      <View style={styles.DateEventView}>
        <Text style={styles.text}>Fin Evenement : </Text>
        <Text style={styles.text}>
          {fin.getHours()}:{fin.getMinutes()}
        </Text>

        <View>
          <TouchableOpacity onPress={() => setIsFinPickerVisible(true)}>
            <MaterialCommunityIcons name="timetable" size={30} color="black" />
          </TouchableOpacity>
          <DateTimePicker
            mode="time"
            isVisible={isFinPickerVisible}
            onConfirm={(date) => {
              setFin(date);
              setIsFinPickerVisible(false);
            }}
            onCancel={() => setIsFinPickerVisible(false)}
          />
        </View>
      </View>
      <FormTextInput
        placeHolder="Description"
        nameIcon="lock"
        ColorIcon={Colors.BLACK}
        onChangeText={(text) => {
          setDescription(text);
        }}
        value={description}
      />
      <View>
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
              }}
            />
          )}
          <View style={{ height: 30 }}></View>
          <TouchableOpacity style={styles.ButtonPhoto} onPress={_pickImage}>
            <FontAwesome name="photo" size={24} color={Colors.WHITE} />
            <Text style={styles.textButton}>Choose Image</Text>
          </TouchableOpacity>
          <View style={{ height: 60 }}></View>

          <TouchableOpacity
            style={styles.ButtonPhoto}
            onPress={AjouterEventHandler}
          >
            <Text style={styles.textButtonAdd}>Modifier</Text>

            <FontAwesome
              name="angle-double-right"
              size={30}
              color={Colors.WHITE}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: Colors.tintColor,
    fontSize: 19,
    fontWeight: "100",
  },
  DateEventView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
  },
  ButtonPhoto: {
    width: "40%",
    height: 40,
    backgroundColor: Colors.DODGER_BLUE,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 9,
  },
  textButton: {
    color: Colors.WHITE,
    fontSize: 15,
    fontWeight: "100",
  },
  textButtonAdd: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: "200",
  },
  ButtonViewPhoto: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
