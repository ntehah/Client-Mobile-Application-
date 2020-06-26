import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import Timeline from "react-native-timeline-flatlist";
import Colors from "../constants/Colors";
import { UrlServer } from "../constants/UrlServer";

export default class TimeLine extends Component {
  constructor() {
    super();
    this.onEventPress = this.onEventPress.bind(this);
    this.renderSelected = this.renderSelected.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
    this.state = { selected: null, events: [], data: [] };
  }
  componentDidMount() {
    this.GetAll();
  }
  onEventPress(data) {
    let ev = this.state.events;
    for (var i in ev) {
      var item = ev[i];

      if (item.titre === data.title) {
        this.props.navigation.navigate("EventDetait", {
          address: item.address,
          date: item.date,
          titre: item.titre,
          debut: item.debut,
          description: item.description,
          fin: item.fin,
          city: item.city,
          organizationName: item.organizationName,
          photoEvent: item.photoEvent,
          photoOrganization: item.photoOrganization,
        });
      }
    }
  }
  GetAll = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "evenement/getall", {
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
        for (var i in data) {
          var item = data[i];

          this.setState({
            events: [
              ...this.state.events,
              {
                id: item.id,
                address: item.adress,
                date: item.date,
                titre: item.titre,
                debut: item.debut,
                description: item.description,
                fin: item.fin,
                city: item.city,
                organizationName: item.organization.name,
                photoEvent: item.photo,
                photoOrganization: item.organization.photo,
              },
            ],
          });
          this.setState({
            data: [
              ...this.state.data,
              {
                id: item.id,
                time: item.date,
                title: item.titre,
                description: item.description,
                icon: require("../assets/images/event.png"),
                imageUrl: item.photo,
              },
            ],
          });
        }
      })

      .done();
  };
  renderSelected() {
    if (this.state.selected)
      return (
        <Text>
          Selected event: {this.state.selected.title} at{" "}
          {this.state.selected.time}
        </Text>
      );
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    var desc = null;
    var description = rowData.description;
    if (rowData.description && rowData.imageUrl) {
      if (rowData.description.length > 150)
        description = rowData.description.substr(0, 150) + "....";

      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{ uri: rowData.imageUrl }} style={styles.image} />
          <Text style={[styles.textDescription]}>{description}</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        {title}
        {desc}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Timeline
          style={styles.list}
          data={this.state.data}
          circleSize={20}
          circleColor={Colors.WHITE}
          lineColor={Colors.DODGER_BLUE}
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          timeStyle={{
            textAlign: "center",
            backgroundColor: Colors.tintColor,
            color: "white",
            padding: 5,
            borderRadius: 13,
          }}
          descriptionStyle={{ color: "gray" }}
          options={{
            style: { paddingTop: 5 },
          }}
          innerCircle={"icon"}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  list: {
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  descriptionContainer: {
    flexDirection: "row",
    paddingRight: 30,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textDescription: {
    marginLeft: 10,
    color: "gray",
  },
});
