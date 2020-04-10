import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import image from "../../assets/images/Profile.png";
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
      data: [
        {
          id: 1,
          nom: "nom",
          prenom: "prenom",
          email: "email",
          photo: { image },
        },
        {
          id: 2,
          nom: "nom",
          prenom: "prenom",
          email: "email",
          photo: { image },
        },
        {
          id: 3,
          nom: "nom",
          prenom: "prenom",
          email: "email",
          photo: { image },
        },
      ],
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });
    this.setState({
      loading: false,
      refreshing: false,
    });
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
 goToView2 = () => {
    console.log('Navigation router run...');
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem
            button
            onPress={this.goToView2}
            title={`${item.nom} ${item.prenom}`}
            subtitle={item.email}
            leftAvatar={{
              rounded: true,
              source: {
                uri:
                  "https://pbs.twimg.com/profile_images/1210618202457292802/lt9KD2lt_400x400.jpg",
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
