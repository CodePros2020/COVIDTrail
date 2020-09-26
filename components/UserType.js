import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import CustomButton from "./customButton";

const UserType = ({ history }) => {
  const [value, setValue] = React.useState("individual");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logoStyle} />
      <Text style={styles.titleHeading}>User Type</Text>
      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <View>
          <Text>Individual</Text>
          <RadioButton value="individual" uncheckedColor="00C0C1" />
        </View>
        <Divider />
        <View>
          <Text>Business</Text>
          <RadioButton value="business" uncheckedColor="00C0C1" />
        </View>
      </RadioButton.Group>
      <CustomButton
        name="Login"
        style="loginBtn"
        onPress={() => history.push("/scanner")}
      />
    </View>
  );
};
export default UserType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
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
  titleHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00C0C1",
  },
  btnText: {
    fontSize: 20,
    color: "#00C0C1",
  },
  divider: {
    backgroundColor: "#f54260",
    color: "#f54260",
  },
});
