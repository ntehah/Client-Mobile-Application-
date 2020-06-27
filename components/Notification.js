import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  Text,
} from "react-native";
import Colors from "../constants/Colors";
import NotificationCart from "./NotificationCart";
import { UrlServer } from "../constants/UrlServer";
export default function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetNotification();
  }, []);
  GetNotification = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "organization/getnotification", {
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
        setNotifications(data);
        setLoading(false);
        if (data.status != undefined) {
          console.log(data);
        }
      })
      .done();
    console.log(notifications);
  };
  return (
    <View style={styles.container}>
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
          {notifications.length ? (
            <View>
              {notifications.map((notification, index) => {
                return (
                  <View key={index}>
                    <NotificationCart
                      title={notification.title}
                      body={notification.body}
                      time={notification.time}
                      type={notification.type}
                    />
                  </View>
                );
              })}
            </View>
          ) : (
            <View>
              <Text>Non Notifications</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  notification: {
    height: "100%",
    width: 40,
    borderColor: Colors.GREEN,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
