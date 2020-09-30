import React, { Component, useState } from "react";
import { StyleSheet, View, Image, SafeAreaView, TextInput } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderSecond from "./HeaderSecond";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NetworkContext } from "../NetworkContext";
import API from "../api";

const EditEmail = ({ navigation, route }) => {
  const { email } = route.params;
  const network = React.useContext(NetworkContext);

  const [emailVal, setEmail] = useState({ email });

  const onPressSave = () => {
    if (emailVal.email === "") {
      alert("Please Enter email");
      return;
    } else {
      API.put(
        `/api/businessAccount/${network.id}/email?newEmail=${emailVal.email}`
      )
        .then((res) => {
          Alert.alert("Success", "Email has been updated.");
        })
        .catch((error) => console.log("failed to update"));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderSecond
          title="Email"
          navigation={navigation}
          onPress={onPressSave}
        />
        <View style={styles.mainView}>
          <Text style={styles.textField}>Email </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setEmail(value)}
              value={emailVal.email}
              spellCheck={false}
              autoCorrect={false}
              maxLength={100}
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
