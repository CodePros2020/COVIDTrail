import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { Text, RadioButton } from "react-native-paper";
import HeaderWide from "./HeaderWide";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NetworkContext } from "../NetworkContext";

const BusinessAccount = ({ navigation }) => {
  const network = React.useContext(NetworkContext);

  const [name, setName] = useState("");
  const [fullAddress, setFullAddress] = useState("");

  useEffect(() => {
    let addLine2;

    if (network.addressLineTwo !== null) {
      addLine2 = network.addressLineTwo;
    } else {
      addLine2 = "";
    }

    setFullAddress(
      network.addressLineOne +
        " " +
        addLine2 +
        ", " +
        network.city +
        ", " +
        network.province +
        ", " +
        network.postalCode
    );
  });

  useEffect(() => {
    if (network.businessName !== null) {
      setName(network.businessName);
    } else {
      let middleName;

      if (network.middleName !== null) {
        middleName = network.middleName;
      } else {
        middleName = "";
      }

      setName(network.firstName + " " + middleName + " " + network.lastName);
    }
  });

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
                  businessName: network.businessName,
                  firstName: network.firstName,
                  middleName: network.middleName,
                  lastName: network.lastName,
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
                  businessName: network.businessName,
                  firstName: network.firstName,
                  middleName: network.middleName,
                  lastName: network.lastName,
                })
              }
            />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>PHONE</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxtField}>{network.phone}</Text>
            <Icon name="edit" style={styles.icon} />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>EMAIL</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxtField}>{network.email || ""}</Text>
            <Icon name="edit" style={styles.icon} />
          </View>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.textField}>PASSWORD</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxtField}>********</Text>
            <Icon name="edit" style={styles.icon} />
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
