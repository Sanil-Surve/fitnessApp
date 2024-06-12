import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyles";
import { useSelector } from "react-redux";
import { selectUser } from "../app/userSlice";


const SuccessRegistration = () => {
  const { currentUser } = useSelector(selectUser);
  const firstName = currentUser.firstName;

  return (
    <ScrollView
      style={styles.successRegistration}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.successRegistrationScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameParent}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <View style={[styles.titleSection, styles.mt44]}>
            <View style={styles.onboardDescription}>
              <Text
                style={[
                  styles.youAreAllSetNowLetsRea,
                  styles.welcomeStefaniPosition,
                ]}
              >
                You are all set now, let’s reach your goals together with us
              </Text>
            </View>
            <View style={styles.onboardTitle}>
              <Text
                style={[
                  styles.welcomeStefani,
                  styles.button1Typo,
                  styles.welcomeStefaniPosition,
                ]}
              >
                Welcome, {firstName}
              </Text>
            </View>
          </View>
        </View>
        <LinearGradient
          style={[styles.button, styles.mt191]}
          locations={[0, 1]}
          colors={["#92a3fd", "#9dceff"]}
        >
          <Pressable style={styles.pressable}>
            <Text style={[styles.button1, styles.button1Typo]}>Go To Home</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt44: {
    marginTop: 44,
  },
  mt191: {
    marginTop: 191,
  },
  successRegistrationScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  welcomeStefaniPosition: {
    textAlign: "center",
    top: 0,
    left: 0,
    position: "absolute",
  },
  button1Typo: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.linkMedium,
  },
  groupIcon: {
    width: 278,
    height: 304,
  },
  youAreAllSetNowLetsRea: {
    fontSize: GlobalStyles.FontSize.smallText,
    lineHeight: 18,
    color: GlobalStyles.Color.darkGray,
    fontFamily: GlobalStyles.FontFamily.linkMedium,
    textAlign: "center",
    width: 214,
  },
  onboardDescription: {
    top: 35,
    height: 36,
    left: 0,
    position: "absolute",
    width: 214,
  },
  welcomeStefani: {
    fontSize: GlobalStyles.FontSize.h4,
    lineHeight: 30,
    color: GlobalStyles.Color.black,
  },
  onboardTitle: {
    left: 17,
    width: 181,
    height: 30,
    top: 0,
    position: "absolute",
  },
  titleSection: {
    height: 71,
    width: 214,
  },
  frameParent: {
    alignItems: "center",
  },
  button1: {
    fontSize: GlobalStyles.FontSize.largeText,
    lineHeight: 24,
    color: GlobalStyles.Color.whiteColor1,
    textAlign: "left",
  },
  pressable: {
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
  successRegistration: {
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.whiteColor1,
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
});

export default SuccessRegistration;
