import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconScan from "react-native-vector-icons/MaterialCommunityIcons";

const NavBarBottom = () => {
  return (
    <View style={styles.mainHeader}>
      <IconScan name="qrcode-scan" size={24} color="#00C0C1" />
      <Icon name="user" size={24} color="#707070" />
      <Icon name="list-alt" size={24} color="#707070" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    padding: 10,
  },
});

export default NavBarBottom;
