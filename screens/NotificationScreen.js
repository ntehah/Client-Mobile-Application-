import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function NotificationScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View>
      <Ionicons></Ionicons>
        <Image/>
        <Text>Title Notification</Text>
        <Text>Body Notification</Text>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
});
