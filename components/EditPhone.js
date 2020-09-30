import React, { Component, useState } from "react";
import { StyleSheet, View, Image, SafeAreaView, TextInput, Alert } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderSecond from "./HeaderSecond";
import Icon from "react-native-vector-icons/FontAwesome5";
import API from '../api';
import { NetworkContext } from "../NetworkContext";

const EditPhone = ({ navigation, route }) => {
  const network = React.useContext(NetworkContext);
  const { phoneNo } = route.params;
  
  const [textInputPhone, setTextInputPhone] = useState(phoneNo);
  const [textInputPassword, setTextInputPassword] = useState('');

  const onPressSave = () => {
    if (!textInputPhone.trim()) {
      alert("Please Enter Phone Number");
      return;
    } else if (!textInputPassword.trim()) {
      alert("Please enter your password to proceed.");
      return;
    } else {

      let userType;

      if (network.businessName !== null) {
        userType = 'businessAccount';
      } else {
        userType = 'userAccount';
      }
      
      console.log('this is new phone', textInputPhone);
      console.log('password entered', textInputPassword);
      console.log('network id: ', network.id);
      console.log('what is userType: ', userType);

      API.put("api/" + userType + "/" + network.id + "/phone?newPhone=" + textInputPhone + "&password=" + textInputPassword)
        .then((response) => {

          console.log('check response', response.data);

          if (response.data.startsWith('Please')) {
            alert(response.data);
          } else {
            Alert.alert(
            "Success!",
            "Phone updated!",

            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
          navigation.navigate('BusinessAccount');
          }          
        })
        .catch((e) => {
            console.error("error phone update " + e);
            alert("Unable to update phone! ");
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderSecond title="Account" navigation={navigation} onPress={onPressSave} />
        <View style={styles.mainView}>
          <Text style={styles.textField}>PHONE NUMBER *</Text>
          <View style={styles.subView}>
            <TextInput 
              style={styles.subTxtField}
              onChangeText={(value) => setTextInputPhone(value)}
              value={textInputPhone}
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
              ></TextInput>
          </View>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.textField}>PLEASE ENTER YOUR PASSWORD *</Text>
          <View style={styles.subView}>
            <TextInput 
              style={styles.subTxtField}
              onChangeText={(value) => setTextInputPassword(value)}
              value={textInputPassword}
              spellCheck={false}
              autoCorrect={false}
              secureTextEntry={true}
              maxLength={30}
              ></TextInput>
          </View>
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
