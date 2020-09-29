import React, { Component, useState, useEffect } from "react";
import { NetworkContext } from "../NetworkContext";
import { AppRegistry, StyleSheet, View, TextInput, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Icon from "react-native-vector-icons/Feather";
import HeaderWide from "./HeaderWide";
const QRCodePage = ({ navigation }) => {
  const network = React.useContext(NetworkContext);
  //   var text = "https://oldnavy.gapcanada.ca/";
  var text = "COVIDTrail-businessId=" + network.id;

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
          flexDirection: "column",
          borderRadius: 10,
          alignItems: "flex-start",
        }}
      >
        <HeaderWide title="Scan" navigation={navigation} />
        <Text style={styles.text}>{network.businessName}</Text>
        <QRCode
          value={text.length > 0 ? text : "health app"}
          size={300}
          bgColor="#000000"
          fgColor="#FFFFFF"
        />
      </View>
      <Icon name="printer" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  text: {
    marginBottom: 20,
    alignSelf: "center",
    fontSize: 32,
    color: "#2700FF",
    padding: 10,
  },
  icon: {
    marginTop: 20,
    fontSize: 64,
    color: "#00C0C1",
  },
});
export default QRCodePage;
