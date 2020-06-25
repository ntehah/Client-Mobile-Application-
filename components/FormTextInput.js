import * as React from "react";
import { StyleSheet, TextInput, View ,Text} from "react-native";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";

function FormTextInput(props) {
  const { placeHolder,nameIcon,ColorIcon,style, ...otherProps } = props;
  return (
    <View style={styles.container}>
    <View style={styles.TextInput}>
   <Text style={styles.text}>{placeHolder}</Text>
      <TextInput
        selectionColor={Colors.DODGER_BLUE}
        style={[styles.textInput, style]}
        {...otherProps}
      />
      </View>
      <View style={styles.icon}>
      <Entypo name={nameIcon} size={18} color={ColorIcon}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    height: 70,
    borderColor: Colors.tintColor,
    borderWidth: 1,
    borderRadius:6,
    marginBottom: 20,
    justifyContent:'center',
    alignItems:"center"
  },
  textInput: {
    flex:1,
    width:"100%",
    height:"100%",
  },
  TextInput:{
    width:'95%',
    flexDirection: 'column',
    paddingTop:8,
    paddingRight:5,
    paddingLeft:15,
  },
  icon:{
    paddingRight:15
  },
  text:{
    color:Colors.BLUE,
  }

});

export default FormTextInput;
