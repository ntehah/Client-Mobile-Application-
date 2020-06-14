import * as React from "react";
import Colors from "../../constants/Colors";
import ContactDetail from "../../components/ContactDetail";
import { createStackNavigator } from '@react-navigation/stack';
import CommunityDemo from "./CommunityDemo";
const Stack = createStackNavigator();

export default class Community extends React.Component {

  render() {
    return (
       <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.tintColor,
      },
      headerTitleStyle: { color: Colors.WHITE },
      headerTintColor: Colors.WHITE,
    }}
    >
      <Stack.Screen name="CommunityDemo" component={CommunityDemo} />
      <Stack.Screen name="ContactDetail" component={ContactDetail} />
    </Stack.Navigator>
        
    );
  }
}