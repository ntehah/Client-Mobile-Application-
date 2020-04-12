import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import Colors from "../constants/Colors";
export default class TimeLine extends Component {
  constructor() {
    super();
    this.onEventPress = this.onEventPress.bind(this);
    this.renderSelected = this.renderSelected.bind(this);
    this.renderDetail = this.renderDetail.bind(this);

    this.data = [
      {
        time: "05/02/2020",
        title: "Événement 1",
        description:
          "An event description is copy that aims to tell your potential attendees what will be happening at the event, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage.",
        icon: require("../assets/images/event.png"),
        imageUrl:
          "https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
      },
      {
        time: "08/02/2020",
        title: "Événement 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
        lineColor: "#009688",
        icon: require("../assets/images/event.png"),
        imageUrl:
          "https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
      },
      {
        time: "10/02/2020",
        title: "Événement 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: require("../assets/images/event.png"),
        imageUrl:
          "https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
      },
      {
        time: "11/02/2020",
        title: "Événement 4",
        icon: require("../assets/images/event.png"),
      },
      {
        time: "13/02/2020",
        title: "Événement 5",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
        lineColor: "#009688",
        icon: require("../assets/images/event.png"),
        imageUrl:
          "https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
      },
      {
        time: "17/02/2020",
        title: "Événement 6",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: require("../assets/images/event.png"),
        imageUrl:
          "https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
      },
    ];
    this.state = { selected: null };
  }

  onEventPress(data) {
    this.props.navigation.navigate("EventDetait", {
      title: data.title,
      description: data.description,
      image: data.imageUrl,
    });
  }

  renderSelected() {
    if (this.state.selected)
      return (
        <Text >
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
          data={this.data}
          circleSize={20}
          circleColor={Colors.WHITE}
          lineColor={Colors.DODGER_BLUE}
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          timeStyle={{
            textAlign: "center",
            backgroundColor: Colors.tintColor,
            color: "white",
            padding:5,
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
