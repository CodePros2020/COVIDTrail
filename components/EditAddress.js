import React, { Component, useState } from "react";
import { StyleSheet, View, SafeAreaView, TextInput, Alert } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderSecond from "./HeaderSecond";
import API from "../api";
import { NetworkContext } from "../NetworkContext";

const EditBusinessName = ({ navigation, route }) => {
  const network = React.useContext(NetworkContext);
  const { address } = route.params;
  const [textInputStreet, setTextInputStreet] = useState("");
  const [textInputUnit, setTextInputUnit] = useState("");
  const [textInputCity, setTextInputCity] = useState("");
  const [textInputProvince, setTextInputProvince] = useState("");
  const [textInputPostal, setTextInputPostal] = useState("");

  const onPressSave = () => {
    if (!textInputBusiness.trim()) {
      Alert.alert(
        "Required",
        "Please enter business name.",
        [{ text: "OK", onPress: () => console.log("OkPresses") }],
        { cancelable: false }
      );
      return;
    } else {
      API.post(
        `/api/businessAccount/${network.id}/name?newName=${textInputBusiness}`
      )
        .then((res) => {
          Alert.alert("Success", "Name has been updated.");
        })
        .catch((error) => console.log("failed to update"));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderSecond
          title="Name"
          navigation={navigation}
          onPress={onPressSave}
        />
        <View style={styles.mainView}>
          <Text style={styles.textField}>Street </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setTextInputBusiness(value)}
              value={textInputBusiness}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            >
              {address.street}
            </TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>Unit </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setTextInputBusiness(value)}
              value={textInputBusiness}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            >
              {address.unit}
            </TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>City </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setTextInputBusiness(value)}
              value={textInputBusiness}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            >
              {address}
            </TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>Province </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setTextInputBusiness(value)}
              value={textInputBusiness}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            >
              {businessName}
            </TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>Postal Code </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setTextInputBusiness(value)}
              value={textInputBusiness}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            >
              {businessName}
            </TextInput>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default EditBusinessName;

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
