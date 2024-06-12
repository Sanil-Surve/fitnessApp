import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import { loginUserAsync } from "../app/userSlice";

const LoginPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("");

  const handleChange = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(loginUserAsync(user));
      if (!response.payload.success) {
        throw new Error(
          response.payload.message || "Login failed. Please try again."
        );
      }
      setUser("");
      navigation.navigate("SuccessRegistration")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ScrollView
      style={styles.loginPage}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.loginPageScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameParent}>
          <View>
            <View>
              <View style={styles.frameParent}>
                <View style={styles.titleSection}>
                  <Text
                    style={[
                      styles.heyThere,
                      styles.heyTherePosition,
                      styles.heyThereTypo,
                      styles.loginLayout,
                    ]}
                  >
                    Hey there,
                  </Text>
                  <Text style={[styles.welcomeBack, styles.loginTypo]}>
                    Welcome Back
                  </Text>
                </View>
                <View style={[styles.labelSection, styles.mt30]}>
                  <Pressable style={styles.forgetPassword}>
                    <Text
                      style={[
                        styles.forgotYourPassword,
                        styles.registerTypo,
                        styles.or1Typo,
                      ]}
                    >
                      Forgot your password?
                    </Text>
                  </Pressable>
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
                    <View
                      style={[styles.placeholder, styles.placeholderPosition]}
                    >
                      <Image
                        style={styles.iconlylightmessage}
                        resizeMode="cover"
                        source={require("../assets/iconlylightmessage.png")}
                      />
                      <TextInput
                        style={[styles.email, styles.emailPosition]}
                        placeholder="Email"
                        keyboardType="default"
                        placeholderTextColor="#ada4a5"
                        textContentType="emailAddress"
                        value={user.email}
                        onChangeText={(text) => handleChange("email", text)}
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
                    <Image
                      style={styles.hidePasswordIcon}
                      resizeMode="cover"
                      source={require("../assets/hidepassword1.png")}
                    />
                    <View
                      style={[styles.placeholder1, styles.placeholderPosition]}
                    >
                      <Image
                        style={styles.iconlylightmessage}
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
                        value={user.password}
                        onChangeText={(text) => handleChange("password", text)}
                      />
                    </View>
                  </View>
                </View>
                  {error && <Text style={styles.errorMessage}>{error}</Text>}
              </View>
              <TouchableOpacity
                style={[styles.buttonLogin, styles.mt285]}
                activeOpacity={0.2}
                onPress={handleSubmit}
              >
                <LinearGradient
                  style={[
                    styles.buttonLoginChild,
                    styles.labelChildPosition,
                    styles.labelChildPosition1,
                  ]}
                  locations={[0, 1]}
                  colors={["#92a3fd", "#9dceff"]}
                />
                <View style={styles.iconlyboldloginParent}>
                  <Image
                    style={[styles.iconlyboldlogin, styles.labelChildPosition]}
                    resizeMode="cover"
                    source={require("../assets/iconlyboldlogin.png")}
                  />
                  <Text
                    style={[
                      styles.login,
                      styles.emailPosition,
                      styles.loginTypo,
                      styles.loginLayout,
                    ]}
                  >
                    Login
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.or, styles.mt20]}>
              <Text style={[styles.or1, styles.or1Typo]}>Or</Text>
              <Image
                style={[styles.orChild, styles.orItemPosition]}
                resizeMode="cover"
                source={require("../assets/vector-671.png")}
              />
              <Image
                style={[styles.orItem, styles.orItemPosition]}
                resizeMode="cover"
                source={require("../assets/vector-681.png")}
              />
            </View>
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
                source={require("../assets/googlelogopngsuiteeverythingyouneedknowaboutgooglenewest0-21.png")}
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
                source={require("../assets/facebook-11.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.registerText, styles.mt30]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Registration")}
        >
          <Text
            style={[styles.dontHaveAnAccountYetReg, styles.heyTherePosition]}
          >
            <Text
              style={[styles.dontHaveAn, styles.heyThereTypo]}
            >{`Don’t have an account yet? `}</Text>
            <Text style={styles.registerTypo}>Register</Text>
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
  mt285: {
    marginTop: 285,
  },
  mt20: {
    marginTop: GlobalStyles.Margin.margin_xs,
  },
  loginPageScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  heyTherePosition: {
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  heyThereTypo: {
    fontFamily: GlobalStyles.FontFamily.linkMedium,
    color: GlobalStyles.Color.black,
  },
  loginLayout: {
    lineHeight: 24,
    fontSize: GlobalStyles.FontSize.largeText,
  },
  loginTypo: {
    fontWeight: "700",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.linkMedium,
  },
  registerTypo: {
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.linkMedium,
  },
  or1Typo: {
    lineHeight: 18,
    fontSize: GlobalStyles.FontSize.smallText,
    textAlign: "left",
    top: 0,
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
  placeholderPosition: {
    left: 15,
    top: 15,
    height: 18,
    position: "absolute",
  },
  emailPosition: {
    top: "0%",
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
    left: 37,
    color: GlobalStyles.Color.black,
  },
  welcomeBack: {
    top: 29,
    fontSize: GlobalStyles.FontSize.h4,
    lineHeight: 30,
    left: 0,
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  titleSection: {
    width: 154,
    height: 59,
  },
  forgotYourPassword: {
    textDecoration: "underline",
    color: "#f784fa",
    left: 0,
  },
  forgetPassword: {
    top: 121,
    left: 88,
    width: 138,
    height: 18,
    position: "absolute",
  },
  labelBgChild: {
    backgroundColor: GlobalStyles.Color.borderColor,
    borderColor: "#f7f8f8",
    borderWidth: 1,
  },
  iconlylightmessage: {
    width: 18,
    height: 18,
    left: 0,
    top: 0,
    position: "absolute",
  },
  email: {
    left: "45.9%",
  },
  placeholder: {
    width: 61,
  },
  label: {
    top: 0,
  },
  hidePasswordIcon: {
    left: 278,
    width: 26,
    height: 26,
    top: 15,
    position: "absolute",
  },
  password: {
    left: "32.56%",
  },
  placeholder1: {
    width: 86,
  },
  label1: {
    top: 63,
  },
  labelSection: {
    height: 139,
    width: 315,
  },
  frameParent: {
    alignItems: "center",
  },
  buttonLoginChild: {
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.purpleLinear,
  },
  iconlyboldlogin: {
    width: "30.38%",
    right: "69.62%",
    maxHeight: "100%",
    bottom: "0%",
    height: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  login: {
    left: "43.04%",
    color: GlobalStyles.Color.whiteColor1,
  },
  iconlyboldloginParent: {
    height: "40%",
    width: "25.08%",
    top: "30%",
    right: "37.46%",
    bottom: "30%",
    left: "37.46%",
    position: "absolute",
  },
  buttonLogin: {
    height: 60,
    width: 315,
  },
  or1: {
    left: 151,
    fontFamily: GlobalStyles.FontFamily.inter,
    color: GlobalStyles.Color.black,
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
  dontHaveAn: {
    color: GlobalStyles.Color.black,
  },
  dontHaveAnAccountYetReg: {
    fontSize: GlobalStyles.FontSize.mediumText,
    lineHeight: 21,
    left: 0,
  },
  registerText: {
    width: 253,
    height: 21,
  },
  loginPage: {
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.whiteColor1,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    overflow: "hidden",
  },
  errorMessage: {
    color: "rgba(206, 19, 19, 0.934)",
    fontSize: 14,
    marginTop: 5,
  },
});

export default LoginPage;
