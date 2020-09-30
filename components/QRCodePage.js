import React, { Component, useState, useEffect } from "react";
import { NetworkContext } from "../NetworkContext";
import { AppRegistry, StyleSheet, View, TextInput, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Icon from "react-native-vector-icons/Feather";
import HeaderWide from "./HeaderWide";
const QRCodePage = ({ navigation }) => {
  const network = React.useContext(NetworkContext);
  var text = "COVIDTrail-businessId=" + network.id;

  return (
    <View style={styles.container}>
      <HeaderWide title="QR Code" navigation={navigation} />
      <View style={styles.subView}>
        <View style={styles.textView}>
          <Text style={styles.text}>{network.businessName}</Text>
        </View>
        <View style={styles.subtextView}>
          <Text style={styles.subText}>Scan below to Log</Text>
        </View>
        <View style={styles.qrView}>
          <QRCode
            value={text.length > 0 ? text : "health app"}
            size={200}
            bgColor="#000000"
            fgColor="#FFFFFF"
          />
        </View>
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
  subView: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "column",
    borderRadius: 10,
    justifyContent: "center",
    width: 350,
    height: 500,
  },
  textView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    height: 30,
  },
  sybTextView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    height: 30,
  },
  text: {
    marginBottom: 0,
    marginTop: 20,
    alignSelf: "center",
    fontSize: 32,
    color: "#2700FF",
    padding: 10,
  },
  subText: {
    marginBottom: 10,
    alignSelf: "center",
    fontSize: 24,
    color: "#000",
    padding: 10,
  },
  icon: {
    marginTop: 15,
    marginBottom: 30,
    fontSize: 64,
    color: "#00C0C1",
  },
  qrView: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default QRCodePage;
