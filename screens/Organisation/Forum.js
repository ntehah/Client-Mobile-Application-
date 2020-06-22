import React from "react";
import { View, Text, AsyncStorage } from "react-native";
import SocketIOClient from "socket.io-client";
import { GiftedChat } from "react-native-gifted-chat";
import { UrlServer } from "../../constants/UrlServer";
export default class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: null,
    };

    this.determineUser = this.determineUser.bind(this);
    this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this.onSend = this.onSend.bind(this);
    this._storeMessages = this._storeMessages.bind(this);

    this.socket = SocketIOClient(UrlServer);
    this.socket.on("message", this.onReceivedMessage);
    this.determineUser();
  }

  /**
   * When a user joins the chatroom, check if they are an existing user.
   * If they aren't, then ask the server for a userId.
   * Set the userId to the component's state.
   */
  determineUser() {
    AsyncStorage.getItem("email")
      .then((userEmail) => {
        // If there isn't a stored userId, then fetch one from the server.
        this.socket.emit("userJoined", userEmail);
        this.setState({ userEmail });
      })
      .catch((e) => alert(e));
  }

  // Event listeners
  /**
   * When the server sends a message to this.
   */
  onReceivedMessage(messages) {
    this._storeMessages(messages);
  }

  /**
   * When a message is sent, send the message to the server
   * and store it in this component's state.
   */
  onSend(messages = []) {
    this.socket.emit("message", messages[0]);
    this._storeMessages(messages);
  }

  render() {
    var user = this.state.userEmail
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={user}
      />
    );
  }

  // Helper functions
  _storeMessages(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
}
