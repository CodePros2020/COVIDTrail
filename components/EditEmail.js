import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderSecond from "./HeaderSecond";
import Icon from "react-native-vector-icons/FontAwesome5";
import API from "../api";
import { NetworkContext } from "../NetworkContext";

const EditEmail = ({ navigation, route }) => {
  const network = React.useContext(NetworkContext);
  const { email } = route.params;

  const [textInputEmail, setTextInputEmail] = useState(email);

  const onPressSave = () => {
    let emailVal;
    let userType;

    if (!textInputEmail.trim()) {
      emailVal = "";
    } else {
      emailVal = textInputEmail;
    }

    if (network.businessName !== null) {
      userType = "businessAccount";
    } else {
      userType = "userAccount";
    }

    console.log("what is new email: ", emailVal);
    console.log("what is network id: ", network.id);
    console.log("what is userType: ", userType);

    API.put(
      "api/" + userType + "/" + network.id + "/email?newEmail=" + emailVal
    )
      .then((response) => {
        Alert.alert(
          "Success!",
          "Email updated!",

          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
        navigation.navigate("BusinessAccount");
      })
      .catch((e) => {
        console.error("error email update " + e);
        alert("Unable to update email! ");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderSecond
          title="Account"
          navigation={navigation}
          onPress={onPressSave}
        />
        <View style={styles.mainView}>
          <Text style={styles.textField}>EMAIL</Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setTextInputEmail(value)}
              value={textInputEmail}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            ></TextInput>
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
});
