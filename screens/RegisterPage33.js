import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyles";

const RegisterPage33 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.registerPage33}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.registerPage33Content}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameChild} />
        <View style={[styles.frameGroup, styles.frameGroupPosition]}>
          <View style={styles.titleSectionParent}>
            <View style={styles.titleSection}>
              <Text
                style={[
                  styles.whatIsYourGoal,
                  styles.button1Typo,
                  styles.frameGroupPosition,
                ]}
              >
                What is your goal ?
              </Text>
              <Text style={styles.itWillHelpUsToChooseABe}>
                It will help us to choose a best program for you
              </Text>
            </View>
            <Image
              style={[styles.cardGoals2Icon, styles.mt50]}
              resizeMode="cover"
              source={require("../assets/cardgoals22.png")}
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
              onPress={() => navigation.navigate("LoginPage")}
            >
              <Text style={[styles.button1, styles.button1Typo]}>Confirm</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
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
  registerPage33Content: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  frameGroupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  button1Typo: {
    textAlign: "left",
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.linkMedium,
  },
  frameChild: {
    left: 20,
    width: 275,
    height: 599,
    top: 0,
    position: "absolute",
  },
  whatIsYourGoal: {
    fontSize: GlobalStyles.FontSize.h4,
    lineHeight: 30,
    color: GlobalStyles.Color.black,
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
  titleSectionParent: {
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
  frameGroup: {
    alignItems: "center",
  },
  frameParent: {
    height: 732,
    width: 315,
  },
  registerPage33: {
    borderRadius: GlobalStyles.Border.screenRadius,
    backgroundColor: GlobalStyles.Color.whiteColor1,
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
});

export default RegisterPage33;
