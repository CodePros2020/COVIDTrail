import React, { Component } from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderWide from "./headerWide";
import Icon from "react-native-vector-icons/FontAwesome5";
import BusinessAccountModel from "../models/BusinessAccount";

const BusinessAccount = () => {
  const businessAccount = new BusinessAccountModel();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderWide title="Account"></HeaderWide>
        <View style={styles.mainView}>
          <Text style={styles.textField}>NAME</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}>My Resturant</Text>
            <Icon
              name="chevron-right"
              style={styles.icon}
              onPress={() => navigation.navigate("EditBusinessName")}
            />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Divider style={{ backgroundColor: "#979797" }} />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>ADDRESS</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}>
              2 My Resturant, Toronto, ON H0H0H0
            </Text>
            <Icon name="chevron-right" style={styles.icon} />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Divider style={{ backgroundColor: "#979797" }} />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>PHONE</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}> (416) 123- 1234</Text>
            <Icon name="edit" style={styles.icon} />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Divider style={{ backgroundColor: "#979797" }} />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>EMAIL</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}>My.Resturant123@email.com</Text>
            <Icon name="edit" style={styles.icon} />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Divider style={{ backgroundColor: "#979797" }} />
          </View>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.textField}>PASSWORD</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}>*******</Text>
            <Icon name="edit" style={styles.icon} />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Divider style={{ backgroundColor: "#979797" }} />
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
