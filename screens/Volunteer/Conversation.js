import React from "react";
import { View, Text, AsyncStorage, StyleSheet ,ActivityIndicator} from "react-native";
import SocketIOClient from "socket.io-client";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons";
import { UrlServer } from "../../constants/UrlServer";
import Colors from "../../constants/Colors";
import { BaseRouter } from "@react-navigation/native";
export default function Conversation({ route, navigation }) {
  const { id, name, photo, email } = route.params;
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState("");
  React.useEffect(() => {
    getConversation();
  }, []);
  const getConversation = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "message/getconversation", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: EMAIL,
        to: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
          setMessages([])

          for (var i in data) {
            var item = data[i];
            console.log(item.time)
            console.log(message)
            setMessages((messages) => [
              ...messages,
              {
                _id: item.id,
                text: item.content,
                createdAt: new Date(),
                user: { _id: id, name: name, avatar: photo },
              },
            ]);
          }
        
      })
      .done();
  };
  const save = async () => {
    console.log(message);
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "message/save", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + DEMO_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: EMAIL,
        to: email,
        id_room: null,
        content: message,
      }),
    }).done();
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: name });
  }, [navigation]);
  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#6646ee",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  }
  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Ionicons name="ios-send" size={32} color="#6646ee" />
        </View>
      </Send>
    );
  }
  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#6646ee' />
      </View>
    );
  }
  onSend = (newMessage = []) => {
    save();
    setMessages(GiftedChat.append(messages, newMessage));
  };
  var user = { _id: id, name: name, avatar: photo };
  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      onInputTextChanged={(text) => setMessage(text)}
      user={user}
      renderBubble={renderBubble}
      renderSend={renderSend}
      renderLoading={renderLoading}
      placeholder="Tapez votre message ici..."
      showUserAvatar
      alwaysShowSend
    />
  );
}
const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
