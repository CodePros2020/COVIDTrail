import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

var width = Dimensions.get("window").width;

const Header = ({ title, navigation, onPress }) => {
  const save = () => {};
  return (
    <View style={styles.mainHeader}>
      <View style={styles.headerStyle}></View>
      <View style={styles.header}>
        <Text style={styles.back} onPress={() => navigation.goBack()}>
          Cancel
        </Text>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.back} onPress={onPress}>
          Save
        </Text>
      </View>
    </View>
  );
};
Header.defaultProps = {
  title: "Hello world",
};

const styles = StyleSheet.create({
  mainHeader: {
    // alignSelf: "stretch",
    // flexDirection: "column",
    // alignItems: "center",
    width: width,
    height: 80,
    marginTop: 25,
  },
  header: {
    justifyContent: 'space-between',
    // alignSelf: "stretch",
    flexDirection: "row",
    // alignItems: "center",
    height: 60,
    padding: 15,
    backgroundColor: "#1D1D1D",
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    // textAlign: "center",
    // marginLeft: 120,
    fontWeight: "700",
  },
  back: {
    color: "#00C0C1",
    fontSize: 16,
  },
  headerStyle: {
    height: 15,
    // alignSelf: "stretch",
    flexDirection: "row",
    // alignSelf: "stretch",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#000000",
  },
});

export default Header;
