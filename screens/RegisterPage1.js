import * as React from "react";
import { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const RegisterPage1 = () => {
  const [rectangleCheckboxchecked, setRectangleCheckboxchecked] =
    useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.registerPage1}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.registerPage1Content}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameParent}>
          <View>
            <View style={styles.frameParent}>
              <View style={styles.titleSection}>
                <Text style={[styles.heyThere, styles.heyThereLayout]}>
                  Hey there,
                </Text>
                <Text style={[styles.createAnAccount, styles.registerTypo]}>
                  Create an Account
                </Text>
              </View>
              <View style={[styles.labelSection, styles.mt30]}>
                <View style={styles.privacyPolicy}>
                  <View style={styles.wrapper}>
                    <RNPCheckbox
                      status={
                        rectangleCheckboxchecked ? "checked" : "unchecked"
                      }
                      onPress={() =>
                        setRectangleCheckboxchecked(!rectangleCheckboxchecked)
                      }
                      color="#5dadf0"
                    />
                  </View>
                  <Text style={styles.byContinuingYouAcceptOurP}>
                    {` By continuing you accept our `}
                    <Text style={styles.privacyPolicy1}>Privacy Policy</Text>
                    {` and `}
                    <Text style={styles.privacyPolicy1}>Term of Use</Text>
                  </Text>
                </View>
                <View style={[styles.label, styles.labelLayout]}>
                  <View
                    style={[
                      styles.labelChildPosition,
                      styles.labelChildPosition1,
                    ]}
                  >
                    <View
                      style={[
                        styles.labelBgChild,
                        styles.childBorder,
                        styles.labelChildPosition,
                        styles.labelChildPosition1,
                      ]}
                    />
                  </View>
                  <View style={styles.placeholder}>
                    <Image
                      style={[
                        styles.iconlylightOutlineprofile,
                        styles.labelChildPosition,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/iconlylightoutlineprofile.png")}
                    />
                    <TextInput
                      style={[styles.firstName, styles.emailPosition, styles.textBox]}
                      placeholder="First Name"
                      keyboardType="default"
                      placeholderTextColor="#ada4a5"
                    />
                  </View>
                </View>
                <View style={[styles.label1, styles.labelLayout]}>
                  <View style={styles.labelChildPosition1}>
                    <View
                      style={[
                        styles.labelBgChild,
                        styles.childBorder,
                        styles.labelChildPosition,
                        styles.labelChildPosition1,
                      ]}
                    />
                  </View>
                  <View
                    style={[styles.placeholder1, styles.placeholderPosition]}
                  >
                    <Image
                      style={[
                        styles.iconlylightmessage,
                        styles.hidePasswordLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/iconlylightmessage.png")}
                    />
                    <TextInput
                      style={[styles.email, styles.emailPosition]}
                      placeholder="Email"
                      keyboardType="default"
                      placeholderTextColor="#ada4a5"
                      textContentType="emailAddress"
                    />
                  </View>
                </View>
                <View style={[styles.label2, styles.labelLayout]}>
                  <View style={styles.labelChildPosition1}>
                    <View
                      style={[
                        styles.labelBgChild,
                        styles.childBorder,
                        styles.labelChildPosition,
                        styles.labelChildPosition1,
                      ]}
                    />
                  </View>
                  <View style={styles.placeholder}>
                    <Image
                      style={[
                        styles.iconlylightOutlineprofile,
                        styles.labelChildPosition,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/iconlylightoutlineprofile.png")}
                    />
                    <TextInput
                      style={[styles.firstName, styles.emailPosition]}
                      placeholder="Last Name"
                      keyboardType="default"
                      placeholderTextColor="#ada4a5"
                    />
                  </View>
                </View>
                <View style={[styles.label3, styles.labelLayout]}>
                  <View style={styles.labelChildPosition1}>
                    <View
                      style={[
                        styles.labelBgChild,
                        styles.childBorder,
                        styles.labelChildPosition,
                        styles.labelChildPosition1,
                      ]}
                    />
                  </View>
                  <TouchableOpacity
                    style={[styles.hidePassword, styles.hidePasswordLayout]}
                    activeOpacity={0.2}
                    onPress={() => {}}
                  >
                    <Image
                      style={styles.hidePasswordIcon}
                      resizeMode="cover"
                      source={require("../assets/hidepassword.png")}
                    />
                  </TouchableOpacity>
                  <View
                    style={[styles.placeholder3, styles.placeholderPosition]}
                  >
                    <Image
                      style={[
                        styles.iconlylightmessage,
                        styles.hidePasswordLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/iconlylightlock.png")}
                    />
                    <TextInput
                      style={[styles.password, styles.emailPosition]}
                      placeholder="Password"
                      keyboardType="default"
                      secureTextEntry
                      placeholderTextColor="#ada4a5"
                      textContentType="password"
                    />
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.buttonLargeRegister, styles.mt147]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("RegisterPage2")}
            >
              <LinearGradient
                style={[
                  styles.buttonLargeRegisterChild,
                  styles.labelChildPosition,
                  styles.labelChildPosition1,
                ]}
                locations={[0, 1]}
                colors={["#92a3fd", "#9dceff"]}
              />
              <Text
                style={[
                  styles.register,
                  styles.registerTypo,
                  styles.heyThereLayout,
                ]}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.or, styles.mt20]}>
            <Text style={styles.or1}>Or</Text>
            <Image
              style={[styles.orChild, styles.orItemPosition]}
              resizeMode="cover"
              source={require("../assets/vector-67.png")}
            />
            <Image
              style={[styles.orItem, styles.orItemPosition]}
              resizeMode="cover"
              source={require("../assets/vector-68.png")}
            />
          </View>
          <View style={[styles.loginSocialMedia, styles.mt20]}>
            <TouchableOpacity
              style={[styles.rectangleParent, styles.groupLayout]}
              activeOpacity={0.2}
              onPress={() => {}}
            >
              <View
                style={[
                  styles.groupChild,
                  styles.groupLayout,
                  styles.childBorder,
                ]}
              />
              <Image
                style={styles.iconPosition}
                resizeMode="cover"
                source={require("../assets/googlelogopngsuiteeverythingyouneedknowaboutgooglenewest0-2.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.rectangleGroup, styles.groupLayout]}
              activeOpacity={0.2}
              onPress={() => {}}
            >
              <View
                style={[
                  styles.groupChild,
                  styles.groupLayout,
                  styles.childBorder,
                ]}
              />
              <Image
                style={[styles.facebook1Icon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/facebook-1.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.login, styles.mt30]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text style={styles.alreadyHaveAnAccountLogin}>
            <Text style={styles.alreadyHaveAnAccount}>
              <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
              <Text>{` `}</Text>
            </Text>
            <Text style={styles.login1}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt30: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  mt147: {
    marginTop: 147,
  },
  mt20: {
    marginTop: GlobalStyles.Margin.margin_xs,
  },
  registerPage1Content: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  heyThereLayout: {
    lineHeight: 24,
    fontSize: GlobalStyles.FontSize.largeText,
  },
  registerTypo: {
    fontFamily: GlobalStyles.FontFamily.poppinsBold,
    position: "absolute",
  },
  labelLayout: {
    height: 48,
    width: 315,
    left: 0,
    position: "absolute",
  },
  labelChildPosition1: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  childBorder: {
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_xs,
  },
  labelChildPosition: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  emailPosition: {
    top: "0%",
    position: "absolute",
  },
  placeholderPosition: {
    left: 15,
    height: 18,
    top: 15,
    position: "absolute",
  },
  hidePasswordLayout: {
    width: 18,
    height: 18,
    position: "absolute",
  },
  orItemPosition: {
    height: 1,
    top: 9,
    position: "absolute",
  },
  groupLayout: {
    width: 50,
    height: 50,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 20,
    width: 20,
    left: 15,
    top: 15,
    position: "absolute",
  },
  heyThere: {
    left: 56,
    textAlign: "left",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.poppinsRegular,
    top: 0,
    position: "absolute",
  },
  createAnAccount: {
    top: 29,
    fontSize: GlobalStyles.FontSize.h4,
    lineHeight: 30,
    left: 0,
    textAlign: "left",
    color: GlobalStyles.Color.black,
  },
  titleSection: {
    width: 193,
    height: 59,
  },
  wrapper: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  privacyPolicy1: {
    textDecoration: "underline",
  },
  byContinuingYouAcceptOurP: {
    top: 1,
    left: 29,
    fontSize: 10,
    lineHeight: 15,
    color: "#ada4a5",
    width: 289,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.linkMedium,
    position: "absolute",
  },
  privacyPolicy: {
    top: 247,
    height: 31,
    width: 318,
    left: 0,
    position: "absolute",
  },
  labelBgChild: {
    backgroundColor: GlobalStyles.Color.borderColor,
    borderColor: "#f7f8f8",
    borderWidth: 1,
  },
  iconlylightOutlineprofile: {
    width: "19.57%",
    right: "80.43%",
    maxHeight: "100%",
    bottom: "0%",
    height: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  firstName: {
    left: "30.43%",
  },
  placeholder9: {
    fontFamily: GlobalStyles.FontFamily.poppinsRegular,
    fontSize: GlobalStyles.FontSize.smallText,
    color: GlobalStyles.Color.mediumGray,
  },
  textBox: {
    fontFamily: GlobalStyles.FontFamily.poppinsRegular,
    fontSize: GlobalStyles.FontSize.smallText,
    color: GlobalStyles.Color.black,
  },
  placeholder: {
    height: "37.5%",
    width: "29.21%",
    top: "31.25%",
    right: "66.03%",
    bottom: "31.25%",
    left: "4.76%",
    position: "absolute",
  },
  label: {
    top: 0,
  },
  iconlylightmessage: {
    left: 0,
    top: 0,
  },
  email: {
    left: "45.9%",
  },
  placeholder1: {
    width: 61,
    height: 18,
  },
  label1: {
    top: 126,
  },
  label2: {
    top: 63,
  },
  hidePasswordIcon: {
    left: -3,
    width: 23,
    height: 24,
    top: 0,
    position: "absolute",
  },
  hidePassword: {
    left: 282,
    top: 15,
    width: 18,
  },
  password: {
    left: "32.56%",
  },
  placeholder3: {
    width: 86,
    height: 18,
  },
  label3: {
    top: 189,
  },
  labelSection: {
    height: 278,
    width: 318,
  },
  frameParent: {
    alignItems: "center",
  },
  buttonLargeRegisterChild: {
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.purpleLinear,
  },
  register: {
    top: "30%",
    left: "39.37%",
    color: GlobalStyles.Color.whiteColor1,
    textAlign: "center",
  },
  buttonLargeRegister: {
    height: 60,
    width: 315,
  },
  or1: {
    left: 151,
    fontSize: GlobalStyles.FontSize.smallText,
    lineHeight: 18,
    fontFamily: GlobalStyles.FontFamily.inter,
    textAlign: "left",
    color: GlobalStyles.Color.black,
    top: 0,
    position: "absolute",
  },
  orChild: {
    width: 142,
    left: 0,
  },
  orItem: {
    left: 175,
    width: 141,
  },
  or: {
    height: 18,
    width: 315,
  },
  groupChild: {
    borderColor: "#dddada",
    borderWidth: 0.8,
    left: 0,
  },
  rectangleParent: {
    left: 0,
  },
  facebook1Icon: {
    overflow: "hidden",
    width: 20,
  },
  rectangleGroup: {
    left: 80,
  },
  loginSocialMedia: {
    width: 130,
    height: 50,
  },
  alreadyHaveAn: {
    fontFamily: GlobalStyles.FontFamily.linkMedium,
  },
  alreadyHaveAnAccount: {
    color: GlobalStyles.Color.black,
  },
  login1: {
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.linkMedium,
  },
  alreadyHaveAnAccountLogin: {
    fontSize: GlobalStyles.FontSize.mediumText,
    lineHeight: 21,
    width: 261,
    left: 0,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  login: {
    height: 21,
    width: 261,
  },
  registerPage1: {
    borderRadius: GlobalStyles.Border.screenRadius,
    backgroundColor: GlobalStyles.Color.whiteColor1,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    overflow: "hidden",
  },
});

export default RegisterPage1;
