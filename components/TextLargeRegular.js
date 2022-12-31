import * as React from "react";
import { Text, StyleSheet } from "react-native";
import GlobalStyles from "../GlobalStyles";

const TextLargeRegular = props => {
  return (
    <Text style={{...styles.mainStyle, ...props.textStyle}}>{props.text}</Text>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    fontFamily: GlobalStyles.FontFamily.poppinsRegular,
    fontSize: GlobalStyles.FontSize.largeText,
  }
});

export default TextLargeRegular;
