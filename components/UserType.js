import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import CustomButton from "../components/CustomButton";

const UserType = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logoStyle} />
      <Test style={styles.titleHeading}>User Type</Test>
      <View style={styles.labelView}>
        <View style={styles.checkboxContainer}>
          <RadioForm
            radio_props={this.state.types}
            initial={0}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={"#00C0C1"}
            animation={true}
            onPress={(value) => {
              this.setState({ value: value });
            }}
          />
          <Text style={styles.label}>Personal</Text>
        </View>
      </View>
      <View style={styles.labelView}>
        <View style={styles.checkboxContainer}>
          <RadioForm
            radio_props={this.state.types}
            initial={0}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={"#00C0C1"}
            animation={true}
            onPress={(value) => {
              this.setState({ value: value });
            }}
          />
          <Text style={styles.label}>Business</Text>
        </View>
      </View>
    </View>
  );
};
export default UserType;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
    flex: 1,
    justifyContent: "center",
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
    fontSize: 22,
    color: "#00C0C1",
  },
  btnText: {
    fontSize: 20,
    color: "#00C0C1",
  },
});
