import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import image from "../../assets/images/Profile.png";
import { UrlServer } from "../../constants/UrlServer";

const contacts = [
  { id: 1, nom: "nom", prenom: "prenom", email: "email", photo: { image } },
  { id: 1, nom: "nom", prenom: "prenom", email: "email", photo: { image } },
  { id: 1, nom: "nom", prenom: "prenom", email: "email", photo: { image } },
];
export default class CommunityDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      volunteers: [],
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.makeRemoteRequest();
    this.getBenevole();
  }
  getBenevole = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    console.log(EMAIL);
    fetch(UrlServer + "volunteer/getvolunters", {
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
            data: [
              ...this.state.data,
              {
                id: item.id,
                name: item.name,
                email: item.email,
                image: item.photo,
              },
            ],
          });
          this.setState({
            volunteers: [
              ...this.state.volunteers,
              {
                id: item.id,
                name: item.name,
                email: item.email,
                image: item.photo,
                numero: item.numero,
                address: item.address,
                date_naissance: item.date_naissance,
                photo: item.photo,
                calendrier: item.calendrier,
                qualifacations: item.qualifacations,
                activites: item.activites,
              },
            ],
          });
        }
        this.setState({ loading: false });
      })
      .done();
  };
  makeRemoteRequest = () => {
    // this.setState({
    //   loading: false,
    //   refreshing: false,
    // });
  };

  handleRefresh = () => {
    this.makeRemoteRequest();
  };

  // handleLoadMore = () => {
  //     this.setState(
  //         {
  //             page: this.state.page + 1,
  //         },
  //         () => {
  //             this.makeRemoteRequest();
  //         },
  //     );
  // };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 10,
          width: "100%",
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  goToView2 = (id) => {
    var array = this.state.volunteers;
    console.log(id);
    for (var i in array) {
      var item = array[i];
      if (item.id === id) {
        this.props.navigation.navigate("ContactDetail", item);
      }
    }
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem
            button
            onPress={() => this.goToView2(item.id)}
            title={item.name}
            subtitle={item.email}
            leftAvatar={{
              rounded: true,
              source: {
                uri: item.image,
              },
            }}
            linearGradientProps={{
              colors: ["#040F16", "#428AF8"],
              start: [1, 0],
              end: [0.2, 0],
            }}
            containerStyle={{ borderBottomWidth: 0 }}
            bottomDivider
            chevron
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        onRefresh={this.handleRefresh}
        refreshing={this.state.refreshing}
      />
    );
  }
}
