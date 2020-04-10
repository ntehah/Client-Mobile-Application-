import * as React from "react";
import EventDetait from "../../components/EventDetait"
import TimeLine from "../../components/TimeLine"
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../../constants/Colors"

const Stack = createStackNavigator();
export default function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.tintColor,
        },
        headerTitleStyle: { color: Colors.WHITE },
        headerTintColor: Colors.WHITE,
      }}
    >
      <Stack.Screen name="TimeLine" component={TimeLine} />
      <Stack.Screen name="EventDetait" component={EventDetait} />
    </Stack.Navigator>
  );
}
