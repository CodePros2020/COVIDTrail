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
import Header from "./Header";
import CustomButton from "./CustomButton";
import Icon from "react-native-vector-icons/FontAwesome5";
// import UserAccount from "../models/UserAccount";

var width = Dimensions.get("window").width;
var widthProportion = "80%";

const ClientSignUp = ({ navigation }) => {

  const [textInputFirstName, setTextInputFirsttName] = useState('');
  const [textInputMiddleName, setTextInputMiddletName] = useState('');
  const [textInputLastName, setTextInputLasttName] = useState('');
  const [textInputPhoneNumber, setTextInputPhoneNumber] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');
  const [textInputAddressLine1, setTextInputAddressLine1] = useState('');
  const [textInputAddressLine2, setTextInputAddressLine2] = useState('');
  const [textInputCity, setTextInputCity] = useState('');
  const [textInputProvince, setTextInputProvince] = useState('');
  const [textInputPostalCode, setTextInputPostalCode] = useState('');
  const [textInputPassword, setTextInputPassword] = useState('');
  const [textInputConfirmPassword, setTextInputConfirmPassword] = useState('');
  const [secure, setSecure] = useState({secure: true, icon: 'eye'});
  const [secureConfirmPassword, setSecureConfirmPassword] = useState({secure: true, icon: 'eye'});
  // const [userModel, setUserModel] = useState({UserAccount});

  const togglePasswordVisiblity = () => {
    let iconName = secure.secure ? 'eye-slash' : 'eye';

    setSecure({
      secure: !secure.secure,
      icon: iconName
    });
  }

  const toggleConfirmPasswordVisiblity = () => {
    let iconName = secureConfirmPassword.secure ? 'eye-slash' : 'eye';

    setSecureConfirmPassword({
      secure: !secureConfirmPassword.secure,
      icon: iconName
    });
  }

  const checkTextInput = () => {
    if (!textInputFirstName.trim()) {
      alert("Please Enter First Name");
      return;
    }

    else if (!textInputLastName.trim()) {
      alert('Please Enter Last Name');
      return;
    }

    else if (!textInputPhoneNumber.trim()) {
      alert('Please Enter Phone Number');
      return;
    }

    else if (!textInputAddressLine1.trim()) {
      alert('Please Enter Address Line 1');
      return;
    }

    else if (!textInputCity.trim()) {
      alert('Please Enter City');
      return;
    }

    else if (!textInputProvince.trim()) {
      alert('Please Enter Province');
      return;
    }

    else if (!textInputPostalCode.trim()) {
      alert('Please Enter Postal Code');
      return;
    }

    else if (!textInputPassword.trim()) {
      alert('Please enter a Password.');
      return;
    }

    else if (!textInputConfirmPassword.trim()) {
      alert('Please confirm the password you entered.');
      return;
    }

    else if (textInputPassword !== textInputConfirmPassword) {
      alert('Password and Confirm Password fields does not match.');
      return;
    }

    else {
      alert('Sign Up Completed.');

      // let userAccount = new UserAccount();
      // userAccount.firstName = textInputFirstName;
      // userAccount.middleName = textInputMiddleName;
      // userAccount.lastName = textInputLastName;
      // userAccount.phoneNumber = textInputPhoneNumber;
      // userAccount.emailAddress = textInputEmail;
      // userAccount.addressLine1 = textInputAddressLine1;
      // userAccount.addressLine2 = textInputAddressLine2;
      // userAccount.city = textInputCity;
      // userAccount.province = textInputProvince;
      // userAccount.postalCode = textInputPostalCode;
      // userAccount.password = textInputPassword;

      navigation.navigate('NavBarBottom');
      return;
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
              onChangeText={
                (value) => setTextInputFirsttName(value)
              }
              value={textInputFirstName}
              placeholder="First Name *"
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
              onChangeText={
                (value) => setTextInputMiddleName(value)
              }
              value={textInputMiddleName}
              placeholder="Middle Name"
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
              onChangeText={
                (value) => setTextInputLasttName(value)
              }
              value={textInputLastName}
              placeholder="Last Name *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              keyboardType='numeric'
              style={styles.input}
              onChangeText={
                (value) => setTextInputPhoneNumber(value)
              }
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
              onChangeText={
                (value) => setTextInputEmail(value)
              }
              value={textInputEmail}
              placeholder="Email"
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
              onChangeText={
                (value) => setTextInputAddressLine1(value)
              }
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
              onChangeText={
                (value) => setTextInputAddressLine2(value)
              }
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
              onChangeText={
                (value) => setTextInputCity(value)
              }
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
            <TextInput
              style={styles.input}
              onChangeText={
                (value) => setTextInputProvince(value)
              }
              value={textInputProvince}
              placeholder="Province *"
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
              onChangeText={
                (value) => setTextInputPostalCode(value)
              }
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
              onChangeText={
                (value) => setTextInputPassword(value)
              }
              value={textInputPassword}
              secureTextEntry={secure.secure}
              placeholder="Password *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
            <Icon style={styles.userIcon} name={secure.icon} onPress={togglePasswordVisiblity} />
          </View>
          <View style={styles.viewStyle}>
            <TextInput
              style={styles.input}
              onChangeText={
                (value) => setTextInputConfirmPassword(value)
              }
              value={textInputConfirmPassword}
              secureTextEntry={secureConfirmPassword.secure}
              placeholder="Confirm Password *"
              placeholderTextColor={"#979797"}
              underlineColorAndroid="transparent"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
            <Icon style={styles.userIcon} name={secureConfirmPassword.icon} onPress={toggleConfirmPasswordVisiblity} />
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
    width: 350
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
