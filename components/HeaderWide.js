import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const HeaderWide = ({ title }) => {
  return (
    <View style={styles.mainHeader}>
      <Image
        source={require("../assets/logosml.png")}
        style={styles.logoStyle}
      />
      <Text style={styles.text}>{title}</Text>
      <Icon name="log-out" size={30} color="#707070" />
    </View>
  );
};
HeaderWide.defaultProps = {
  title: "Hello world",
};

const styles = StyleSheet.create({
  mainHeader: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    padding: 10,
  },
  header: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    padding: 15,
    backgroundColor: "#1D1D1D",
  },
  text: {
    color: "#00C0C1",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "700",
  },
  back: {
    color: "#00C0C1",
    fontSize: 16,
  },
  headerStyle: {
    height: 15,
    alignSelf: "stretch",
    flexDirection: "row",
    alignSelf: "stretch",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#000000",
  },
});

export default HeaderWide;
