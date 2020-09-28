import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import API from "../api";

const HeaderWide = ({ title, navigation }) => {

  const logout = () => {
    API.post("/logout")
      .then((response) => {
        console.log("Data received", response);
        alert("Logged out!");
        navigation.navigate("WelcomePage");
      })
      .catch((e) => {
        (error) => console.error(error);
      });
  };

  return (
    <View style={{ marginTop: 0, flexDirection: "row", alignItems: "center" }}>
      <View style={styles.mainHeader}>
        <Image source={require("../assets/logosml.png")} />
        <Text style={styles.text}>{title}</Text>
        <Icon name="log-out" size={30} onPress={logout} color="#707070" />
      </View>
    </View>
  );
};
HeaderWide.defaultProps = {
  title: "Hello world",
};

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    height: 100,
    padding: 10,
  },
  header: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    padding: 15,
    backgroundColor: "#262D37",
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
});

export default HeaderWide;
