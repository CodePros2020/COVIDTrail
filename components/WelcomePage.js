import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  CheckBox,
  Button,
  Linking,
  TextInput,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomButton from "./CustomButton";
import API from "../api";
import Session from "./serviceSession.js";

export default function WelcomePage({ navigation }) {
  const [username, onUserNameChange] = React.useState("");
  const [password, onPasswordChange] = React.useState("");
  const [isSelected, setSelection] = React.useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("id", value);
    } catch (e) {
      console.log("value is not saved async storage", e);
    }
  };

  const success = async () => {
    await API.post("login?password=" + password + "&username=" + username)
      .then((response) => {
        var account = response.data;
        Session.saveData(account.token);
        var account = response.data;
        if (account) {
          storeData(account.id.toString());
          console.log("account token", account.token);
          // Session.setToken(account.token);
          navigation.navigate("NavBarBottom", { account: account });
        }
      })
      .catch((error) => {
        alert("Invalid username and/or password!" + error);
      });
  };

  const userTypeHandler = () => {
    navigation.navigate("UserType");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logoStyle} />
      <View style={styles.viewStyle}>
        <Icon style={styles.userIcon} name="user" />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => onUserNameChange(text)}
          value={username}
          name={username}
          placeholder="Phone Number"
          placeholderTextColor={"#979797"}
          underlineColorAndroid="transparent"
          spellCheck={false}
          autoCorrect={false}
          maxLength={10}
        />
      </View>

      <View style={styles.viewStyle}>
        <Icon style={styles.userIcon} name="lock" />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onPasswordChange(text)}
          value={password}
          name={password}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={"#979797"}
          underlineColorAndroid="transparent"
          spellCheck={false}
          autoCorrect={false}
          maxLength={25}
        />
      </View>

      <View style={styles.labelView}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            tintColors={{ true: "#00C0C1", false: "white" }}
          />
          <Text style={styles.label}>Remember me</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Forgot Password?</Text>
        </View>
      </View>

      <CustomButton name="Login" style="loginBtn" onPress={success} />
      <View style={styles.line}></View>
      <View style={styles.signUp}>
        <Text style={styles.label}>
          Don't have an account?&nbsp;
          <Text
            style={{ color: "#00C0C1", paddingLeft: 10 }}
            onPress={userTypeHandler}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  input: {
    height: 40,
    width: 250,
    color: "#FFF",
    fontSize: 18,
  },
  text: {
    color: "red",
  },
  viewStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262D37",
    borderBottomWidth: 1,
    borderBottomColor: "#707070",
    height: 60,
    marginLeft: 10,
    color: "#ffffff",
  },
  userIcon: {
    color: "#979797",
    margin: 5,
    paddingRight: 10,
    alignItems: "center",
    fontSize: 18,
  },
  logoStyle: {
    height: 250,
    width: 300,
  },
  loginBtn: {
    height: 45,
    width: 250,
    borderColor: "#00C0C1",
    borderWidth: 1,
    backgroundColor: "#262D37",
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#262D37",
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",
    backgroundColor: "#262D37",
    borderColor: "#00C0C1",
    color: "#00C0C1",
  },
  label: {
    color: "#696969",
  },
  labelView: {
    marginTop: 20,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262D37",
    padding: 10,
  },
  line: {
    marginTop: 30,
    borderBottomColor: "#707070",
    borderBottomWidth: 1,
    width: 325,
  },
  signUp: {
    marginTop: 30,
  },
});
