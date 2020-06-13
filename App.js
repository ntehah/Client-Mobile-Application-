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
import About from "./Login/About";

import Colors from "./constants/Colors";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigatorUser from "./navigation/BottomTabNavigatorUser";
import BottomTabNavigatorOrganisation from "./navigation/BottomTabNavigatorOrganisation";
import { AuthContext } from "./Services/AuthContext";
import { ProviderVolunteerInscription } from "./Services/VolunteerInscription";
import { ProviderOrganizationInscription } from "./Services/OrganizationInscription";

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
            email: "",
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            Role: action.role,
            email: action.email,
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
      email: "",
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      let userRole;
      let userEmail;
      try {
        userToken = await AsyncStorage.getItem("id_token");
        userRole = await AsyncStorage.getItem("id_role");
        userEmail = await AsyncStorage.getItem("email");
      } catch (e) {
        console.log(e);
      }

      dispatch({
        type: "RESTORE_TOKEN",
        token: userToken,
        role: userRole,
        email: userEmail,
      });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data, email) => {
        const _onValueChange = async (item, selectedValue) => {
          try {
            await AsyncStorage.setItem(item, selectedValue);
          } catch (error) {
            console.log("AsyncStorage error: " + error.message);
          }
        };
        _onValueChange("id_token", data.accessToken);
        _onValueChange("id_role", data.role);
        _onValueChange("email", email);
        dispatch({
          type: "SIGN_IN",
          token: data.accessToken,
          role: data.role,
          email: email,
        });
      },
      signOut: () => {
        AsyncStorage.removeItem("id_token");
        AsyncStorage.removeItem("id_role");
        AsyncStorage.removeItem("email");

        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data, email) => {
        const _onValueChange = async (item, selectedValue) => {
          try {
            await AsyncStorage.setItem(item, selectedValue);
          } catch (error) {
            console.log("AsyncStorage error: " + error.message);
          }
        };
        _onValueChange("id_token", data.accessToken);
        _onValueChange("id_role", data.role);
        _onValueChange("email", email);
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
    <AuthContext.Provider value={[state, authContext]}>
      <ProviderOrganizationInscription>
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
                  options={{
                    title: "Qualification",
                    headerBackTitle: "Retour",
                  }}
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
                <Stack.Screen
                  name="About"
                  component={About}
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
      </ProviderOrganizationInscription>
    </AuthContext.Provider>
  );
}
