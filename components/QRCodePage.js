import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import { NetworkContext } from "../NetworkContext";

const QRCodePage = () => {
  const network = React.useContext(NetworkContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>In Scanner View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
  },
  text: {
    color: "#fff",
  },
});
export default QRCodePage;
