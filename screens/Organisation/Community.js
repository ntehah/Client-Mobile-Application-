import * as React from "react";
import Colors from "../../constants/Colors";
import ContactDetail from "../../components/ContactDetail";
import { createStackNavigator } from "@react-navigation/stack";
import { View, FlatList, ActivityIndicator, AsyncStorage } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { UrlServer } from "../../constants/UrlServer";

class CommunityDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      volunteers: [],
      dataSource: [],
      error: null,
      refreshing: false,
      search: "",
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }
  getBenevole = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
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
        this.setState({ data: [], volunteers: [] });
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
        this.setState({ dataSource: this.state.data, loading: false });
      })
      .done();
  };
  makeRemoteRequest = () => {
    this.getBenevole();
  };

  handleRefresh = () => {
    this.makeRemoteRequest();
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 10,
          width: "100%",
          backgroundColor:Colors.WHITE,
        }}
      />
    );
  };
  SearchFilterFunction(text) {
    const newData = this.state.data.filter(function (item) {
      const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      dataSource: newData,
      search: text,
    });
  }
  renderHeader = () => {
    return (
      <SearchBar
        lightTheme
        round
        searchIcon={{ size: 24 }}
        onChangeText={(text) => this.SearchFilterFunction(text)}
        onClear={(text) => this.SearchFilterFunction("")}
        placeholder="Rechercher..."
        value={this.state.search}
      />
    );
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
        data={this.state.dataSource}
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
            containerStyle={{ borderBottomWidth: 0 ,backgroundColor:Colors.WHITE}}
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

const Stack = createStackNavigator();

export default class Community extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="CommunityDemo"
          component={CommunityDemo}
          options={{
            title: "Bénévoles",
            headerStyle: {
              backgroundColor: Colors.WHITE,
            },
            headerTintColor: Colors.tintColor,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="ContactDetail"
          component={ContactDetail}
          options={{
            title: "Bénévole Profile",
            headerStyle: {
              backgroundColor: Colors.WHITE,
            },
            headerTintColor: Colors.tintColor,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackTitle: "Retour",
          }}
        />
      </Stack.Navigator>
    );
  }
}
