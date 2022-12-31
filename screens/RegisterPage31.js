import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyles";

const RegisterPage31 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.registerPage31}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.registerPage31Content}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameParent}>
          <View style={styles.titleSection}>
            <Text style={[styles.whatIsYourGoal, styles.button1Typo]}>
              What is your goal ?
            </Text>
            <Text style={styles.itWillHelpUsToChooseABe}>
              It will help us to choose a best program for you
            </Text>
          </View>
          <Image
            style={[styles.cardGoals2Icon, styles.mt50]}
            resizeMode="cover"
            source={require("../assets/cardgoals2.png")}
          />
        </View>
        <LinearGradient
          style={[styles.button, styles.mt73]}
          locations={[0, 1]}
          colors={["#92a3fd", "#9dceff"]}
        >
          <TouchableOpacity
            style={styles.touchableopacity}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("RegisterPage32")}
          >
            <Text style={[styles.button1, styles.button1Typo]}>Confirm</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt50: {
    marginTop: GlobalStyles.Margin.margin_md,
  },
  mt73: {
    marginTop: GlobalStyles.Margin.margin_lg,
  },
  registerPage31Content: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  button1Typo: {
    textAlign: "left",
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.linkMedium,
  },
  whatIsYourGoal: {
    top: 0,
    left: 0,
    fontSize: GlobalStyles.FontSize.h4,
    lineHeight: 30,
    color: GlobalStyles.Color.black,
    position: "absolute",
    fontWeight: "700",
  },
  itWillHelpUsToChooseABe: {
    top: 35,
    left: 7,
    fontSize: GlobalStyles.FontSize.smallText,
    lineHeight: 18,
    color: GlobalStyles.Color.darkGray,
    textAlign: "center",
    width: 182,
    fontFamily: GlobalStyles.FontFamily.linkMedium,
    position: "absolute",
  },
  titleSection: {
    width: 195,
    height: 71,
  },
  cardGoals2Icon: {
    width: 319,
    height: 522,
  },
  frameParent: {
    alignItems: "center",
  },
  button1: {
    fontSize: GlobalStyles.FontSize.largeText,
    lineHeight: 24,
    color: GlobalStyles.Color.whiteColor1,
  },
  touchableopacity: {
    borderRadius: GlobalStyles.Border.br_lg,
    flexDirection: "row",
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.Color.purpleLinear,
    width: "100%",
  },
  button: {
    width: 315,
  },
  registerPage31: {
    borderRadius: GlobalStyles.Border.screenRadius,
    backgroundColor: GlobalStyles.Color.whiteColor1,
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
});

export default RegisterPage31;
