import React, { Component } from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderSecond from "./HeaderSecond";
import Icon from "react-native-vector-icons/FontAwesome5";

const EditBusinessAccount = ({ navigation, route }) => {
  // const { name } = route.params;
  const { name } = '';
  console.log("Name is", name);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderSecond title="Account" />
        <View style={styles.mainView}>
          <Text style={styles.textField}>NAME</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}>My Resturant</Text>
            <Icon
              name="chevron-right"
              style={styles.icon}
              onPress={() =>
                navigation.navigate("EditBusinessName/", businessAccount.id)
              }
            />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Divider style={{ backgroundColor: "#979797" }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default EditBusinessAccount;

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
