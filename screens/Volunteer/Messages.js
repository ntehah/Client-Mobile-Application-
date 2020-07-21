import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import Colors from "../../constants/Colors";
import { UrlServer } from "../../constants/UrlServer";
import Conversation from "../../components/Conversation";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { ListItem } from "react-native-elements";
function Discussion(props) {
  const [volunteers, setVolunteers] = useState({});
  const [dataList, setDataList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getDiscussions();
  }, []);
  getDiscussions = async () => {
    var DEMO_TOKEN = await AsyncStorage.getItem("id_token");
    var EMAIL = await AsyncStorage.getItem("email");
    fetch(UrlServer + "message/getdiscussion", {
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
        setDataList([]);
        for (var i in data) {
          var item = data[i];
          setDataList((dataList) => [
            ...dataList,
            {
              id: item.id,
              name: item.name,
              email: item.email,
              image: item.photo,
            },
          ]);
        }
      })
      .done(() => setLoading(false));
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 10,
          width: "100%",
          backgroundColor: Colors.WHITE,
        }}
      />
    );
  };
  goToView2 = (id) => {
    var array = dataList;
    for (var i in array) {
      var item = array[i];
      if (item.id === id) {
        console.log(item.name);
        props.navigation.navigate("Conversation", {id:item.id,name:item.name,photo:item.image,email:item.email});
      }
    }
  };
  handleRefresh = () => {
    getDiscussions();
  };
  renderFooter = () => {
    if (!loading) return null;

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
  return (
    <View>
      {loading ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 200,
          }}
        >
          <ActivityIndicator size="large" color={Colors.BLACK} />
        </View>
      ) : (
        <View>
          <FlatList
            data={dataList}
            renderItem={({ item }) => (
              <ListItem
                button
                onPress={() => goToView2(item.id)}
                title={item.name}
                subtitle={item.email}
                leftAvatar={{
                  rounded: true,
                  source: {
                    uri: item.image,
                  },
                }}
                linearGradientProps={{
                  colors: [Colors.WHITE, "#428AF8"],
                  start: [2, 0],
                  end: [0.2, 0],
                }}
                containerStyle={{
                  borderBottomWidth: 0,
                  backgroundColor: Colors.WHITE,
                }}
                bottomDivider
                chevron
              />
            )}
            keyExtractor={(item) => item.email}
            ItemSeparatorComponent={renderSeparator}
            onRefresh={handleRefresh}
            refreshing={refreshing}
          />
        </View>
      )}
    </View>
  );
}
function Forum(props) {
  return (
    <View>
      <Text>Inbox</Text>
    </View>
  );
}

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      DiscussionIcon: true,
      ForumIcon: false,
    };
  }
  OnclickIconDiscussion = () => {
    this.setState({
      DiscussionIcon: true,
      ForumIcon: false,
    });
  };
  OnclickIconForum = () => {
    this.setState({
      DiscussionIcon: false,
      ForumIcon: true,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBottom}>
            <TouchableOpacity
              onPress={this.OnclickIconDiscussion}
              style={styles.button}
            >
              <Text
                style={{
                  color: this.state.DiscussionIcon
                    ? Colors.BLUE
                    : Colors.tabIconDefault,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Discussion
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.OnclickIconForum}
              style={styles.button}
            >
              <Text
                style={{
                  color: this.state.ForumIcon
                    ? Colors.BLUE
                    : Colors.tabIconDefault,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Forum
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {/* {this.state.DiscussionIcon ? <Discussion /> : <Forum />} */}
          <Discussion navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}
const Stack = createStackNavigator();
export default class Messages extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Messages"
          component={Container}
          options={{
            title: "Messages",
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
          name="Conversation"
          component={Conversation}
          options={{
            title: "Conversation",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  header: {
    paddingTop: 5,
  },
  headerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
    marginBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  button: {
    paddingRight: 10,
    paddingLeft: 15,
    paddingBottom: 15,
  },
});
