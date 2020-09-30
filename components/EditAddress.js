import React, { Component, useState } from "react";
import { StyleSheet, View, SafeAreaView, TextInput, Alert } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderSecond from "./HeaderSecond";
import API from "../api";
import { NetworkContext } from "../NetworkContext";
import { add } from "react-native-reanimated";

const EditAddress = ({ navigation, route }) => {
  const network = React.useContext(NetworkContext);
  const { address } = route.params;
  const { addressVal, setAddress } = useState({
    street: address.street,
    unit: address.unit,
    city: address.city,
    province: address.province,
    postalCode: address.postalCode,
  });

  const onPressSave = () => {
    if (!addressVal.street.trim()) {
      Alert.alert(
        "Required",
        "Please enter street.",
        [{ text: "OK", onPress: () => console.log("OkPresses") }],
        { cancelable: false }
      );
      return;
    } else if (!addressVal.city.trim()) {
      Alert.alert(
        "Required",
        "Please enter city.",
        [{ text: "OK", onPress: () => console.log("OkPresses") }],
        { cancelable: false }
      );
      return;
    } else if (!addressVal.province.trim()) {
      Alert.alert(
        "Required",
        "Please enter province.",
        [{ text: "OK", onPress: () => console.log("OkPresses") }],
        { cancelable: false }
      );
      return;
    } else if (!addressVal.postalCode.trim()) {
      Alert.alert(
        "Required",
        "Please enter postal code.",
        [{ text: "OK", onPress: () => console.log("OkPresses") }],
        { cancelable: false }
      );
      return;
    } else {
      //   API.put(
      //     `/api/businessAccount/${network.id}/name?newName=${textInputBusiness}`
      //   )
      //     .then((res) => {
      //       Alert.alert("Success", "Name has been updated.");
      //     })
      //     .catch((error) => console.log("failed to update"));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderSecond
          title="Address"
          navigation={navigation}
          onPress={onPressSave}
        />
        <View style={styles.mainView}>
          <Text style={styles.textField}>Street </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setAddress({ street: value })}
              value={addressVal.street}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            ></TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>Unit </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setAddress({ unit: value })}
              value={addressVal.unit}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            ></TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>City </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setAddress({ city: value })}
              value={addressVal.city}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            ></TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>Province </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setAddress({ province: value })}
              value={addressVal.province}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            ></TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>Postal Code </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) =>
                setTextInputBusiness({ postalCode: value })
              }
              value={addressVal.postalCode}
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
export default EditAddress;

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
