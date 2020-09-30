import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { Text, RadioButton } from "react-native-paper";
import HeaderWide from "./HeaderWide";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NetworkContext } from "../NetworkContext";
import API from '../api';
import { useIsFocused } from "@react-navigation/native";

const BusinessAccount = ({ navigation }) => {
  const network = React.useContext(NetworkContext);
  const isFocused = useIsFocused();


  const [name, setName] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFname] = useState("");
  const [mName, setMname] = useState("");
  const [lName, setLname] = useState("");
  const [bName, setBname] = useState("");


  useEffect( () => {


    async function getUser() {

      let acctType;

      console.log('check if id is coming here', network.id);

      if (network.businessName !== null) {
        acctType = 'businessAccount';
      } else {
        acctType = 'userAccount'
      }

      await API.get('api/' + acctType + '/' + network.id)
        .then((response) => {

          var account = response.data;
          console.log('user', JSON.stringify(account));

        setPhone(account.phone);
        setEmail(account.email);

        let addLine2;

        console.log('address 2', account.address.addressLineTwo);

    if (account.address.addressLineTwo !== null) {
      addLine2 = account.address.addressLineTwo;
    } else {
      addLine2 = "";
    }

    setFullAddress(
      account.address.addressLineOne +
        " " +
        addLine2 +
        ", " +
        account.address.city +
        ", " +
        account.address.province +
        ", " +
        account.address.postalCode
    );

    if (network.businessName !== null) {
          setName(account.businessName);
          setBname(account.businessName);
        } else {
          let middleName;
    
          if (account.middleName !== null) {
            middleName = account.middleName;
          } else {
            middleName = "";
          }
    
          setName(account.firstName + " " + middleName + " " + account.lastName);
          setFname(account.firstName);
          setMname(account.middleName);
          setLname(account.lastName);
        }

    }).catch(error => {
          console.log('In Business Logs component - Error retrieving user!' + error);
      });
    }
    
    getUser();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderWide title="Account" navigation={navigation} />
        <View style={styles.mainView}>
          <Text style={styles.textField}>NAME</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxtField}>{name}</Text>
            <Icon
              name="chevron-right"
              style={styles.icon}
              onPress={() =>
                navigation.navigate("EditNameScreen", {
                  businessName: bName,
                  firstName: fName,
                  middleName: mName,
                  lastName: lName,
                })
              }
            />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>ADDRESS</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}>{fullAddress}</Text>
            <Icon
              name="chevron-right"
              style={styles.icon}
              onPress={() =>
                navigation.navigate("EditAddress", {
                  businessName: bName,
                  firstName: fName,
                  middleName: mName,
                  lastName: lName,
                })
              }
            />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>PHONE</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxtField}>{phone}</Text>
            <Icon name="edit" style={styles.icon} />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>EMAIL</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxtField}>{email || ""}</Text>
            <Icon name="edit" style={styles.icon} />
          </View>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.textField}>PASSWORD</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxtField}>********</Text>
            <Icon
              name="edit"
              style={styles.icon}
              onPress={() => navigation.navigate("EditPassword")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BusinessAccount;

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
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: "#979797",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  subView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingTop: 10,
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
