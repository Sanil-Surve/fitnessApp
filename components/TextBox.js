import * as React from "react";
import { TextInput, StyleSheet } from "react-native";
import GlobalStyles from "../GlobalStyles";

const TextBox = props => {

  return (
    <TextInput
      style={{...styles.mainStyle, ...props.textBoxStyle}}
      placeholder = {props.placeholder}
      keyboardType = "default"
      placeholderTextColor = {GlobalStyles.Color.mediumGray}
      textContentType = {props.textBoxContentType}
      secureTextEntry = {props.isSecureTextEntry}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    fontFamily: GlobalStyles.FontFamily.poppinsRegular,
    fontSize: GlobalStyles.FontSize.smallText,
    color: GlobalStyles.Color.black,
  },
});

export default TextBox;
