import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const RegisterPage2 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.registerPage2}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.registerPage2Content}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameParent}>
          <View style={styles.frameParent}>
            <Image
              style={styles.vectorSectionIcon}
              resizeMode="cover"
              source={require("../assets/vectorsection.png")}
            />
            <View style={[styles.profileText, styles.mt30]}>
              <Text style={styles.letsCompleteYourProfile}>
                Let’s complete your profile
              </Text>
              <Text style={styles.itWillHelpUsToKnowMoreA}>
                It will help us to know more about you!
              </Text>
            </View>
          </View>
          <View style={[styles.labelSection, styles.mt30]}>
            <View style={[styles.label, styles.labelLayout]}>
              <View
                style={[
                  styles.labelBg,
                  styles.labelPosition,
                  styles.labelPosition1,
                ]}
              >
                <View
                  style={[
                    styles.labelBgChild,
                    styles.labelPosition,
                    styles.labelPosition1,
                  ]}
                />
              </View>
              <Image
                style={[styles.dropdownIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/dropdown.png")}
              />
              <View style={[styles.placeholder, styles.placeholderPosition]}>
                <TextInput
                  style={[styles.chooseGender, styles.yourPosition]}
                  placeholder="Choose Gender"
                  keyboardType="default"
                  placeholderTextColor="#ada4a5"
                />
                <Image
                  style={[
                    styles.iconlylight2User,
                    styles.iconLayout,
                    styles.labelPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/iconlylight2-user.png")}
                />
              </View>
            </View>
            <View style={[styles.label1, styles.labelLayout]}>
              <View
                style={[
                  styles.labelBg,
                  styles.labelPosition,
                  styles.labelPosition1,
                ]}
              >
                <View
                  style={[
                    styles.labelBgChild,
                    styles.labelPosition,
                    styles.labelPosition1,
                  ]}
                />
              </View>
              <View style={[styles.placeholder1, styles.placeholderPosition]}>
                <TextInput
                  style={[styles.dateOfBirth, styles.yourPosition]}
                  placeholder="Date of Birth"
                  keyboardType="default"
                  placeholderTextColor="#ada4a5"
                />
                <Image
                  style={[
                    styles.iconlylightcalendar,
                    styles.iconLayout,
                    styles.labelPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/iconlylightcalendar.png")}
                />
              </View>
            </View>
            <View style={[styles.label2, styles.labelLayout]}>
              <View style={[styles.labelBg2, styles.labelPosition]}>
                <View
                  style={[
                    styles.labelBgChild,
                    styles.labelPosition,
                    styles.labelPosition1,
                  ]}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonKg}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <LinearGradient
                  style={[styles.buttonKgChild, styles.btnPosition]}
                  locations={[0, 1]}
                  colors={["#c58bf2", "#eea4ce"]}
                />
                <Text style={[styles.kg, styles.kgTypo]}>KG</Text>
              </TouchableOpacity>
              <View style={[styles.placeholder2, styles.placeholderPosition]}>
                <TextInput
                  style={[styles.yourWeight, styles.yourPosition]}
                  placeholder="Your Weight"
                  keyboardType="number-pad"
                  placeholderTextColor="#ada4a5"
                />
                <Image
                  style={[
                    styles.weightScale1Icon,
                    styles.iconLayout,
                    styles.labelPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/weightscale-1.png")}
                />
              </View>
            </View>
            <View style={[styles.label3, styles.labelLayout]}>
              <View style={[styles.labelBg2, styles.labelPosition]}>
                <View
                  style={[
                    styles.labelBgChild,
                    styles.labelPosition,
                    styles.labelPosition1,
                  ]}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonKg}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <LinearGradient
                  style={[styles.buttonKgChild, styles.btnPosition]}
                  locations={[0, 1]}
                  colors={["#c58bf2", "#eea4ce"]}
                />
                <Text style={[styles.cm, styles.kgTypo]}>CM</Text>
              </TouchableOpacity>
              <View style={[styles.placeholder3, styles.placeholderPosition]}>
                <TextInput
                  style={[styles.yourHeight, styles.yourPosition]}
                  placeholder="Your Height"
                  keyboardType="number-pad"
                  placeholderTextColor="#ada4a5"
                />
                <Image
                  style={[
                    styles.iconlylightswap,
                    styles.iconLayout,
                    styles.labelPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/iconlylightswap.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.mt30]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("RegisterPage31")}
        >
          <LinearGradient
            style={[styles.btn, styles.btnPosition]}
            locations={[0, 1]}
            colors={["#92a3fd", "#9dceff"]}
          />
          <View style={styles.next}>
            <Text style={styles.next1}>Next</Text>
            <Image
              style={[styles.iconlylightarrowRight2, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/iconlylightarrow--right-2.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt30: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  registerPage2Content: {
    flexDirection: "row",
    paddingBottom: 28,
  },
  labelLayout: {
    height: 48,
    width: 315,
    left: 0,
    position: "absolute",
  },
  labelPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  labelPosition1: {
    width: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
    maxWidth: "100%",
    overflow: "hidden",
  },
  placeholderPosition: {
    left: "4.76%",
    bottom: "31.25%",
    top: "31.25%",
    height: "37.5%",
    position: "absolute",
  },
  yourPosition: {
    top: "0%",
    position: "absolute",
  },
  btnPosition: {
    backgroundColor: GlobalStyles.Color.purpleLinear,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  kgTypo: {
    textAlign: "left",
    fontWeight: "500",
    color: GlobalStyles.Color.whiteColor1,
    top: "31.25%",
    lineHeight: 18,
    fontSize: GlobalStyles.FontSize.smallText,
    fontFamily: GlobalStyles.FontFamily.linkMedium,
    position: "absolute",
  },
  vectorSectionIcon: {
    width: 375,
    height: 350,
  },
  letsCompleteYourProfile: {
    fontSize: GlobalStyles.FontSize.h4,
    lineHeight: 30,
    color: GlobalStyles.Color.black,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.linkMedium,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
    width: 333,
  },
  itWillHelpUsToKnowMoreA: {
    top: 35,
    left: 43,
    color: GlobalStyles.Color.darkGray,
    lineHeight: 18,
    fontSize: GlobalStyles.FontSize.smallText,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.linkMedium,
    position: "absolute",
  },
  profileText: {
    height: 53,
    width: 333,
  },
  frameParent: {
    alignItems: "center",
  },
  labelBgChild: {
    backgroundColor: GlobalStyles.Color.borderColor,
    borderRadius: GlobalStyles.Border.br_xs,
    right: "0%",
    position: "absolute",
  },
  labelBg: {
    right: "0%",
    position: "absolute",
  },
  dropdownIcon: {
    width: "5.71%",
    right: "4.76%",
    left: "89.52%",
    bottom: "31.25%",
    top: "31.25%",
    height: "37.5%",
    maxHeight: "100%",
  },
  chooseGender: {
    left: "22.95%",
  },
  iconlylight2User: {
    width: "14.75%",
    right: "85.25%",
  },
  placeholder: {
    width: "38.73%",
    right: "56.51%",
  },
  label: {
    top: 0,
    height: 48,
  },
  dateOfBirth: {
    left: "27.45%",
  },
  iconlylightcalendar: {
    width: "17.65%",
    right: "82.35%",
  },
  placeholder1: {
    width: "32.38%",
    right: "62.86%",
  },
  label1: {
    top: 63,
  },
  labelBg2: {
    width: "80%",
    right: "20%",
    position: "absolute",
  },
  buttonKgChild: {
    borderRadius: GlobalStyles.Border.br_xs,
  },
  kg: {
    left: "33.33%",
  },
  buttonKg: {
    width: "15.24%",
    left: "84.76%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  yourWeight: {
    left: "27.72%",
  },
  weightScale1Icon: {
    width: "17.82%",
    right: "82.18%",
  },
  placeholder2: {
    width: "32.06%",
    right: "63.17%",
  },
  label2: {
    top: 126,
  },
  cm: {
    left: "29.17%",
  },
  yourHeight: {
    left: "28.87%",
  },
  iconlylightswap: {
    width: "18.56%",
    right: "81.44%",
  },
  placeholder3: {
    width: "30.79%",
    right: "64.44%",
  },
  label3: {
    top: 189,
  },
  labelSection: {
    height: 237,
    width: 315,
  },
  btn: {
    borderRadius: GlobalStyles.Border.br_lg,
    shadowColor: "rgba(149, 173, 254, 0.3)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
  },
  next1: {
    fontSize: GlobalStyles.FontSize.largeText,
    lineHeight: 24,
    color: GlobalStyles.Color.whiteColor1,
    left: "0%",
    top: "0%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.linkMedium,
    fontWeight: "700",
    position: "absolute",
  },
  iconlylightarrowRight2: {
    height: "83.33%",
    width: "32.79%",
    top: "8.33%",
    bottom: "8.33%",
    left: "67.21%",
    right: "0%",
  },
  next: {
    height: "40%",
    width: "19.37%",
    top: "30%",
    right: "40.32%",
    bottom: "30%",
    left: "40.32%",
    position: "absolute",
  },
  button: {
    height: 60,
    width: 315,
  },
  registerPage2: {
    borderRadius: GlobalStyles.Border.screenRadius,
    backgroundColor: GlobalStyles.Color.whiteColor1,
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
});

export default RegisterPage2;
