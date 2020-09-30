import React, { Component, useState } from "react";
import { StyleSheet, View, SafeAreaView, TextInput, Alert } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderVerify from "./HeaderVerify";
import API from "../api";
import { NetworkContext } from "../NetworkContext";

const EditPhone = ({ navigation, route }) => {
  const network = React.useContext(NetworkContext);
  const { phoneNo } = route.params;
  const [state, setState] = useState({ phone: phoneNo });

  const onPressSave = () => {
    if (!state.name.trim()) {
      Alert.alert(
        "Required",
        "Please enter phone.",
        [{ text: "OK", onPress: () => console.log("Ok Pressed") }],
        { cancelable: false }
      );
      return;
    } else {
      let userType;

    if (network.businessName !== null) {
      userType = 'businessAccount';
    } else {
      userType = 'userAccount';
    }

      API.put(
        `/api/${userType}/${network.id}/phone?newPhone=${state.phone}`
      )
        .then((res) => {
          Alert.alert("Success", "Phone has been updated.");
        })
        .catch((error) => console.log("failed to update"));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderVerify
          title="Phone"
          navigation={navigation}
          onPress={onPressSave}
        />
        <View style={styles.mainView}>
          <Text style={styles.textField}>New Phone Number </Text>
          <View style={styles.subView}>
            <TextInput
              keyboardType="name-phone-pad"
              style={styles.subTxtField}
              onChangeText={(value) => setState({ phone: value })}
              value={state.phone}
              spellCheck={false}
              autoCorrect={false}
              maxLength={10}
            ></TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>Password </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setPassword(value)}
              value={password}
              secureTextEntry={true}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            ></TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>Send Verification Code </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default EditPhone;

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
