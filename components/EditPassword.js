import React, { Component, useState } from "react";
import { StyleSheet, View, Image, SafeAreaView, TextInput } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderSecond from "./HeaderSecond";
import Icon from "react-native-vector-icons/FontAwesome5";
import { color } from "react-native-reanimated";
import API from "../api";

const EditEmail = ({ navigation }) => {
  const [textInputPassword, setTextInputPassword] = useState("");
  const [textInputConfirmPassword, setTextInputConfirmPassword] = useState("");
  const [secureConfirmPassword, setSecureConfirmPassword] = useState({
    secure: true,
    icon: "eye",
    color: "#979797",
  });
  const [secure, setSecure] = useState({
    secure: true,
    icon: "eye",
    color: "#979797",
  });

  const togglePasswordVisiblity = () => {
    let iconName = secure.secure ? "eye-slash" : "eye";
    let eyeColor = secure.secure ? "#979797" : "#00C0C1";

    setSecure({
      secure: !secure.secure,
      icon: iconName,
      color: eyeColor,
    });
  };

  const toggleConfirmPasswordVisiblity = () => {
    let iconName = secureConfirmPassword.secure ? "eye-slash" : "eye";
    let eyeColor = secureConfirmPassword.secure ? "#979797" : "#00C0C1";

    setSecureConfirmPassword({
      secure: !secureConfirmPassword.secure,
      icon: iconName,
      color: eyeColor,
    });
  };

  const onPressSave = () => {
    if (!textInputPassword.trim()) {
      Alert.alert(
        "Information Required!",
        "Please provide password.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else if (!textInputConfirmPassword.trim()) {
      Alert.alert(
        "Information Required!",
        "Please provide confirm password.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else if (textInputPassword !== textInputConfirmPassword) {
      Alert.alert(
        "Information Required!",
        "Password and Confirm Password fields does not match.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else {
      API.put("api/manageUser?password=" + textInputPassword)
        .then((res) => {
          Alert.alert("Success", "Password has been updated.");
        })
        .catch((error) => console.log("failed to update"));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderSecond
          title="Password"
          navigation={navigation}
          onPress={onPressSave}
        />
        <View style={styles.mainView}>
          <Text style={styles.textField}>New Password </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setTextInputPassword(value)}
              value={textInputPassword}
              secureTextEntry={secure.secure}
              placeholder="Password *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
            <Icon
              style={
                secure.icon === "eye" ? styles.userIcon : styles.eyeVisible
              }
              name={secure.icon}
              onPress={togglePasswordVisiblity}
            />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>Confirm Password</Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setTextInputConfirmPassword(value)}
              value={textInputConfirmPassword}
              secureTextEntry={secureConfirmPassword.secure}
              placeholder="Confirm Password *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
            <Icon
              style={styles.userIcon}
              name={secureConfirmPassword.icon}
              onPress={toggleConfirmPasswordVisiblity}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default EditEmail;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    marginTop: 0,
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#262D37",
    alignItems: "center",
    color: "#fff",
  },
  mainView: {
    flexDirection: "column",
    alignSelf: "stretch",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  subView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingTop: 10,
    backgroundColor: "#262D37",
    borderBottomWidth: 1,
    borderBottomColor: "#707070",
  },
  textField: {
    color: "#00C0C1",
    fontSize: 14,
  },
  subTxtField: {
    color: "#fff",
    fontSize: 18,
  },
  icon: {
    color: "#979797",
    fontSize: 18,
  },
  viewStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262D37",
    borderBottomWidth: 1,
    borderBottomColor: "#707070",
    height: 60,

    color: "#ffffff",
    width: 360,
  },
  input: {
    flex: 1,
    height: 40,
    // width: 350,
    color: "#ffffff",
    fontSize: 18,
  },
  userIcon: {
    color: "#979797",
    // margin: 5,
    // paddingRight: 10,
    // alignItems: "center",
    fontSize: 18,
  },
  eyeVisible: {
    color: "#00C0C1",
    fontSize: 18,
  },
});
