import * as React from "react";
import {
  Platform,
  AsyncStorage,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import Qualification from "./Login/Qualification";
import Information from "./Login/Information";
import Calendrier from "./Login/Calendrier";
import Welecome from "./Login/Welecome";
import ProfilPhoto from "./Login/ProfilPhoto";

import Colors from "./constants/Colors";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigatorUser from "./navigation/BottomTabNavigatorUser";
import BottomTabNavigatorOrganisation from "./navigation/BottomTabNavigatorOrganisation";
import { AuthContext } from "./Services/AuthContext";
import { ProviderVolunteerInscription } from "./Services/VolunteerInscription";

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            Role: action.role,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            Role: action.role,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      Role: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      let userRole;
      try {
        userToken = await AsyncStorage.getItem("id_token");
        userRole = await AsyncStorage.getItem("id_role");
      } catch (e) {
        // Restoring token failed
        console.log(e);
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken, role: userRole });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        const _onValueChange = async (item, selectedValue) => {
          try {
            await AsyncStorage.setItem(item, selectedValue);
          } catch (error) {
            console.log("AsyncStorage error: " + error.message);
          }
        };
        _onValueChange("id_token", data.accessToken);
        _onValueChange("id_role", data.role);

        console.log(data);
      },
      signOut: () => {
        AsyncStorage.removeItem("id_token");
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
      
        const _onValueChange = async (item, selectedValue) => {
          try {
            await AsyncStorage.setItem(item, selectedValue);
          } catch (error) {
            console.log("AsyncStorage error: " + error.message);
          }
        };
        _onValueChange("id_token", data.accessToken);
        _onValueChange("id_role", data.role);
        // dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    [],
  );
  if (state.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color={Colors.BLACK} />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <ProviderVolunteerInscription>
        <NavigationContainer>
          {state.userToken == null ? (
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: Colors.WHITE,
                },
                headerTitleStyle: { color: Colors.tintColor },
                headerTintColor: Colors.tintColor,
              }}
            >
              <Stack.Screen name="connexion" component={SignIn} />
              <Stack.Screen
                name="inscription"
                component={SignUp}
                options={{ title: "inscription", headerBackTitle: "Retour" }}
              />
              <Stack.Screen
                name="Qualification"
                component={Qualification}
                options={{ title: "Qualification", headerBackTitle: "Retour" }}
              />
              <Stack.Screen
                name="Information"
                component={Information}
                options={{ title: "Information", headerBackTitle: "Retour" }}
              />
              <Stack.Screen
                name="Calendrier"
                component={Calendrier}
                options={{
                  title: "emploi du temps ",
                  headerBackTitle: "Retour",
                }}
              />
              <Stack.Screen
                name="Welecome"
                component={Welecome}
                options={{ title: "", headerBackTitle: "Retour" }}
              />
              <Stack.Screen
                name="Photo"
                component={ProfilPhoto}
                options={{ title: "", headerBackTitle: "Retour" }}
              />
            </Stack.Navigator>
          ) : state.Role == "ROLE_VOLUNTEER" ? (
            <BottomTabNavigatorUser />
          ) : state.Role == "ROLE_ORGANIZATION" ? (
            <BottomTabNavigatorOrganisation />
          ) : (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator size="large" color={Colors.BLACK} />
            </View>
          )}
        </NavigationContainer>
      </ProviderVolunteerInscription>
    </AuthContext.Provider>
  );
}
