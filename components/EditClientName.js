import React, { Component, useState } from "react";
import { StyleSheet, View, Image, SafeAreaView, TextInput } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderSecond from "./HeaderSecond";
import Icon from "react-native-vector-icons/FontAwesome5";

const EditClientName = ({ navigation, route }) => {
  const { firstName } = route.params;
  const { middleName } = route.params;
  const { lastName } = route.params;

  const [textInputFirstName, setTextInputFirsttName] = useState("");
  const [textInputMiddleName, setTextInputMiddletName] = useState("");
  const [textInputLastName, setTextInputLasttName] = useState("");

  const checkTextInput = () => {
    if (!textInputFirstName.trim()) {
      alert("Please Enter First Name");
      return;
    } else if (!textInputLastName.trim()) {
      alert("Please Enter Last Name");
      return;
    }
  }

  const onPressSave = () => {
    if (!textInputFirstName.trim()) {
      alert("Please Enter First Name");
      return;
    } else if (!textInputLastName.trim()) {
      alert("Please Enter Last Name");
      return;
    } else {
      
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderSecond title="Account" navigation={navigation} onPress={onPressSave} />
        <View style={styles.mainView}>
          <Text style={styles.textField}>FIRST NAME *</Text>
          <View style={styles.subView}>
            <TextInput 
              style={styles.subTxtField}
              onChangeText={(value) => setTextInputFirsttName(value)}
              value={textInputFirstName}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
              >{firstName}</TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>MIDDLE NAME</Text>
          <View style={styles.subView}>
            <TextInput 
              style={styles.subTxtField}
              onChangeText={(value) => setTextInputMiddleName(value)}
              value={textInputMiddleName}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
              >{middleName}</TextInput>
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>LAST NAME *</Text>
          <View style={styles.subView}>
            <TextInput 
              style={styles.subTxtField}
              onChangeText={(value) => setTextInputLasttName(value)}
              value={textInputLastName}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
              >{lastName}</TextInput>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default EditClientName;

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
