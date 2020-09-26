import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import Header from "./Header";
import CustomButton from "../components/CustomButton";

var width = Dimensions.get("window").width;
var widthProportion = "80%";

const ClientSignUp = ({ navigation }) => {
  const [textInputFirstName, setTextInputFirsttName] = useState("");
  const [textInputLastName, setTextInputLasttName] = useState("");

  const checkTextInput = () => {
    if (!textInputFirstName.trim()) {
      alert("Please Enter First Name");
      return;
    }

    if (!textInputLastName.trim()) {
      alert("Please Enter Last Name");
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{ width: width }}>
          <Header title="Sign Up" navigation={navigation}></Header>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setTextInputFirsttName(value)}
              placeholder="First Name *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   onChangeText={(text) => onChangeText(text)}
              //   value={value}
              placeholder="Middle Name"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setTextInputLasttName(value)}
              placeholder="Last Name *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   onChangeText={(text) => onChangeText(text)}
              //   value={value}
              placeholder="Address Line 2"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   onChangeText={(text) => onChangeText(text)}
              //   value={value}
              placeholder="City *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   onChangeText={(text) => onChangeText(text)}
              //   value={value}
              placeholder="Province *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   onChangeText={(text) => onChangeText(text)}
              //   value={value}
              placeholder="Postal Code *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   onChangeText={(text) => onChangeText(text)}
              //   value={value}
              placeholder="Password *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   onChangeText={(text) => onChangeText(text)}
              //   value={value}
              placeholder="Confirm Password *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View>
            <Text style={styles.warning}>
              * Indicates that field is mandatory.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.gap}>
          <CustomButton
            name="Next"
            style="customBtn"
            onPress={checkTextInput}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
    alignItems: "center",
    marginTop: 0,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "#262D37",
    // marginHorizontal: 20,
    // width: width
  },
  text: {
    fontSize: 42,
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
  input: {
    height: 40,
    width: 350,
    color: "#ffffff",
    fontSize: 18,
  },
  warning: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 6,
  },
  gap: {
    marginBottom: 8,
  },
  customBtn: {
    height: 45,
    width: 250,
    borderColor: "#00C0C1",
    borderWidth: 1,
    backgroundColor: "#262D37",
  },
});

export default ClientSignUp;
