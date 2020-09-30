import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  Dimensions,
  Alert,
  Picker,
} from "react-native";
import Header from "./Header";
import CustomButton from "./CustomButton";
import Icon from "react-native-vector-icons/FontAwesome5";
import API from "../api";

var width = Dimensions.get("window").width;

const ClientSignUp = ({ navigation }) => {
  const [textInputFirstName, setTextInputFirsttName] = useState("");
  const [textInputMiddleName, setTextInputMiddleName] = useState("");
  const [textInputLastName, setTextInputLasttName] = useState("");
  const [textInputPhoneNumber, setTextInputPhoneNumber] = useState("");
  const [textInputEmail, setTextInputEmail] = useState("");
  const [textInputAddressLine1, setTextInputAddressLine1] = useState("");
  const [textInputAddressLine2, setTextInputAddressLine2] = useState("");
  const [textInputCity, setTextInputCity] = useState("");
  const [textInputProvince, setTextInputProvince] = useState("");
  const [textInputPostalCode, setTextInputPostalCode] = useState("");
  const [textInputPassword, setTextInputPassword] = useState("");
  const [textInputConfirmPassword, setTextInputConfirmPassword] = useState("");
  const [secureConfirmPassword, setSecureConfirmPassword] = useState({
    secure: true,
    icon: "eye",
    color: "#979797",
  });
  const [secure, setSecure] = useState({
    secure: true,
    icon: "eye",
    color: "#979797",
  });

  const togglePasswordVisiblity = () => {
    let iconName = secure.secure ? "eye-slash" : "eye";
    let eyeColor = secure.secure ? "#979797" : "#00C0C1";

    setSecure({
      secure: !secure.secure,
      icon: iconName,
      color: eyeColor,
    });
  };

  const toggleConfirmPasswordVisiblity = () => {
    let iconName = secureConfirmPassword.secure ? "eye-slash" : "eye";
    let eyeColor = secureConfirmPassword.secure ? "#979797" : "#00C0C1";

    setSecureConfirmPassword({
      secure: !secureConfirmPassword.secure,
      icon: iconName,
      color: eyeColor,
    });
  };

  const checkTextInput = () => {
    if (!textInputFirstName.trim()) {
      Alert.alert(
        "Information Required!",
        "Please provide First Name.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else if (!textInputLastName.trim()) {
      Alert.alert(
        "Information Required!",
        "Please provide Last Name.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else if (!textInputPhoneNumber.trim()) {
      Alert.alert(
        "Information Required!",
        "Please provide Phone Number.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else if (!textInputAddressLine1.trim()) {
      Alert.alert(
        "Information Required!",
        "Please provide Address Line 1.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else if (!textInputCity.trim()) {
      Alert.alert(
        "Information Required!",
        "Please provide City.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else if (!textInputProvince.trim()) {
      Alert.alert(
        "Information Required!",
        "Please provide Province.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else if (!textInputPostalCode.trim()) {
      Alert.alert(
        "Information Required!",
        "Please choose Postal Code.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else if (!textInputPassword.trim()) {
      Alert.alert(
        "Information Required!",
        "Please provide Password.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else if (!textInputConfirmPassword.trim()) {
      Alert.alert(
        "Information Required!",
        "Please provide Confirm Password.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else if (textInputPassword !== textInputConfirmPassword) {
      Alert.alert(
        "Error!",
        "Password and Confirm Password fields do not match.",

        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else {
      var userAccount = {
        address: {
          addressLineOne: textInputAddressLine1,
          addressLineTwo: textInputAddressLine2,
          city: textInputCity,
          postalCode: textInputPostalCode,
          province: textInputProvince,
        },
        email: textInputEmail,
        firstName: textInputFirstName,
        lastName: textInputLastName,
        middleName: textInputMiddleName,
        password: textInputPassword,
        phone: textInputPhoneNumber,
      };

      API.post("api/userAccount/create", userAccount)
        .then((response) => {
          Alert.alert(
            "Success!",
            "Sign up Completed!",

            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
          navigation.navigate("WelcomePage");
        })
        .catch((e) => {
          (error) => {
            console.error("error is sign up personal " + error);
            alert("Unable to create account! ");
            navigation.navigate("WelcomePage");
          };
        });
    }
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
              onChangeText={(value) => setTextInputFirsttName(value)}
              value={textInputFirstName}
              placeholder="First Name *"
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
              onChangeText={(value) => setTextInputMiddleName(value)}
              value={textInputMiddleName}
              placeholder="Middle Name"
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
              onChangeText={(value) => setTextInputLasttName(value)}
              value={textInputLastName}
              placeholder="Last Name *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={100}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => setTextInputPhoneNumber(value)}
              value={textInputPhoneNumber}
              placeholder="Phone Number *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={10}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setTextInputEmail(value)}
              value={textInputEmail}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setTextInputAddressLine1(value)}
              value={textInputAddressLine1}
              placeholder="Address Line 1 *"
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
              onChangeText={(value) => setTextInputAddressLine2(value)}
              value={textInputAddressLine2}
              placeholder="Address Line 2"
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
              onChangeText={(value) => setTextInputCity(value)}
              value={textInputCity}
              placeholder="City *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View style={styles.viewStyle}>
            <Picker
              style={{
                height: 50,
                width: width - 25,
                color: "#ffffff",
                fontSize: 30,
                placeholderTextColor: "#979797",
              }}
              selectedValue={textInputProvince}
              onValueChange={(itemValue, itemIndex) =>
                setTextInputProvince(itemValue)
              }
            >
              <Picker.Item label="Select Province *" value="" />
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
              onChangeText={(value) => setTextInputPostalCode(value)}
              value={textInputPostalCode}
              placeholder="Postal Code *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={6}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setTextInputPassword(value)}
              value={textInputPassword}
              secureTextEntry={secure.secure}
              placeholder="Password *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
            <Icon
              style={
                secure.icon === "eye" ? styles.userIcon : styles.eyeVisible
              }
              name={secure.icon}
              onPress={togglePasswordVisiblity}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setTextInputConfirmPassword(value)}
              value={textInputConfirmPassword}
              secureTextEntry={secureConfirmPassword.secure}
              placeholder="Confirm Password *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
            <Icon
              style={styles.userIcon}
              name={secureConfirmPassword.icon}
              onPress={toggleConfirmPasswordVisiblity}
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
            // onPress={() => navigation.navigate("NavBarBottom")}
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
  eyeVisible: {
    color: "#00C0C1",
    fontSize: 18,
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
    width: 350,
  },
  input: {
    flex: 1,
    height: 40,
    // width: 350,
    color: "#ffffff",
    fontSize: 18,
  },
  warning: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 6,
  },
  gap: {
    marginBottom: 8,
  },
  customBtn: {
    height: 45,
    width: 250,
    borderColor: "#00C0C1",
    borderWidth: 1,
    backgroundColor: "#262D37",
  },
  userIcon: {
    color: "#979797",
    // margin: 5,
    // paddingRight: 10,
    // alignItems: "center",
    fontSize: 18,
  },
});

export default ClientSignUp;
