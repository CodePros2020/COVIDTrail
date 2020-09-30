import React, { Component, useState } from "react";
import { StyleSheet, View, SafeAreaView, TextInput, Alert } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderSecond from "./HeaderSecond";
import API from "../api";
import { NetworkContext } from "../NetworkContext";

const EditBusinessName = ({ navigation, route }) => {
  const network = React.useContext(NetworkContext);
  const { businessName } = route.params;
  const [state, setState] = useState({ name: businessName });

  const onPressSave = () => {
    if (!state.name.trim()) {
      Alert.alert(
        "Required",
        "Please enter business name.",
        [{ text: "OK", onPress: () => console.log("Ok Pressed") }],
        { cancelable: false }
      );
      return;
    } else {
      API.put(`api/businessAccount/${network.id}/name/${state.name}`)
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
          <Text style={styles.textField}>NAME </Text>
          <View style={styles.subView}>
            <TextInput
              style={styles.subTxtField}
              onChangeText={(value) => setState({ name: value })}
              value={state.name}
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
