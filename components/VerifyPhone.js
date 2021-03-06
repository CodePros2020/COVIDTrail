import React, { Component, useState } from "react";
import { StyleSheet, View, SafeAreaView, TextInput, Alert } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderSecond from "./HeaderSecond";
import API from "../api";
import { NetworkContext } from "../NetworkContext";

const VerifyPhone = ({ navigation, route }) => {
  const network = React.useContext(NetworkContext);
  const { code } = route.params;
  const [state, setState] = useState({ phoneCode: code });

  const onPressVerify = () => {
    if (!state.name.trim()) {
      Alert.alert(
        "Required",
        "Please enter phone.",
        [{ text: "OK", onPress: () => console.log("Ok Pressed") }],
        { cancelable: false }
      );
      return;
    } else {
 Alert.alert(
        "Phone Verified",
        "Youe phone number is successfully updated.",
        [{ text: "Close", onPress: () => console.log("close Pressed") }],
        { cancelable: false }
      );
    //   API.put(
    //     `/api/businessAccount/${network.id}/phone?newPhone=${state.phone}`
    //   )
    //     .then((res) => {
    //       Alert.alert("Success", "Phone has been updated.");
    //     })
    //     .catch((error) => console.log("failed to update"));
    // }
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
          <Text style={styles.textField}>Phone </Text>
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
          <Text style={styles.textField} onPress={onPressVerify}>Verify </Text>
        </View>
      </View> 
    </SafeAreaView>
  );
};
export default VerifyPhone;

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
