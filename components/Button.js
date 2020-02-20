import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/Colors"


export function ButtonDefault(props){
    const { label, onPress } = props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );

}
export function ButtonInscription(props){
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.container2} onPress={onPress}>
      <Text style={styles.text2}>{label}</Text>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.tintColor,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  text: {
    color: colors.WHITE,
    textAlign: "center",
    height: 20
  },
  container2: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.tintColor
  },
  text2: {
    color: colors.tintColor,
    textAlign: "center",
    height: 20
  }
});
