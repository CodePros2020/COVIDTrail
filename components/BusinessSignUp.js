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
import Header from "./header";
import CustomButton from "./customButton";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Picker } from "@react-native-community/picker";

var width = Dimensions.get("window").width;
var widthProportion = "80%";

const BusinessSignUp = ({ navigation }) => {
  const [txtBusinessName, setBusinessName] = useState("");
  const state = {
    province: "",
  };

  const checkTextInput = () => {
    if (!txtBusinessName.trim()) {
      alert("Please Enter Business Name");
      return;
    }
  };
  const [businessAccount, setBusinessAccount] = useState({
    _id: "",
    businessName: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    province: "",
    postalCode: "",
    password: "",
    confirmPassword: "",
  });
  const onChange = (e) => {
    e.persist();
    setBusinessAccount({ ...businessAccount, [e.target.name]: e.target.value });
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
              value={businessAccount.businessName}
              onChange={onChange}
              placeholder="Business Name *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={50}
              name="businessName"
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   value={businessAccount.email}
              //   name="email"
              //   onChange={onChange}
              placeholder="Email"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={50}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              placeholder="Address Line 1 *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={100}
              //   value={businessAccount.addressLine1}
              //   onChange={onChange}
              //   name="addressLine1"
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   value={businessAccount.addressLine2}
              //   onChange={onChange}
              placeholder="Address Line 2"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={100}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   value={businessAccount.city}
              //   onChange={onChange}
              placeholder="City *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={50}
            />
          </View>
          <View style={styles.viewStyle}>
            <Picker
              selectedValue={state.province}
              style={{
                height: 50,
                width: 300,
                color: "#979797",
                fontSize: 20,
                position: "relative",
                left: 0,
                right: 0,
              }}
              //   onValueChange={(itemValue, itemIndex) =>
              //     this.setState({ province: itemValue })
              //   }
            >
              <Picker.Item label="Select Province" value="" />
              <Picker.Item label="Alberta" value="AB" />
              <Picker.Item label="British Columbia" value="BC" />
              <Picker.Item label="Manitoba" value="MB" />
              <Picker.Item label="New Brunswick" value="NB" />
              <Picker.Item label="Newfoundland and Labrador" value="NL" />
              <Picker.Item label="Northwest Territories" value="NT" />
              <Picker.Item label="Nova Scotia" value="NS" />
              <Picker.Item label="Nunavut" value="NU" />
              <Picker.Item label="Ontario" value="ON" />
              <Picker.Item label="Prince Edward Island" value="PE" />
              <Picker.Item label="Quebec" value="QC" />
              <Picker.Item label="Saskatchewan" value="SK" />
              <Picker.Item label="Yukon" value="YT" />
            </Picker>
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   value={businessAccount.postalCode}
              //   onChange={onChange}
              placeholder="Postal Code *"
              autoCompleteType="postal-code"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={7}
            />
          </View>
          <View style={styles.viewStylePassword}>
            <TextInput
              style={styles.input}
              //   value={businessAccount.password}
              //   onChange={onChange}
              placeholder="Password *"
              autoCompleteType="password"
              inlineImageLeft=""
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              spellCheck={false}
              autoCorrect={false}
              maxLength={16}
            >
              {/* <Icon name="user" style={{ height: 30, width: 30 }} /> */}
            </TextInput>
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              //   value={businessAccount.confirmPassword}
              //   onChange={onChange}
              placeholder="Confirm Password *"
              autoCompleteType="password"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              spellCheck={false}
              autoCorrect={false}
              maxLength={16}
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
  viewStylePassword: {
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
    marginBottom: 15,
  },
  customBtn: {
    height: 45,
    width: 250,
    borderColor: "#00C0C1",
    borderWidth: 1,
    backgroundColor: "#262D37",
  },
});

export default BusinessSignUp;
