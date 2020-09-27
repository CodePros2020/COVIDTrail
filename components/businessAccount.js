import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderWide from "./headerWide";

const Scanner = () => {
  return (
    <View style={styles.container}>
      <HeaderWide title="Account" />
      <View>
        <Text>this is Scanner</Text>
      </View>
    </View>
  );
};
export default Scanner;

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
});
