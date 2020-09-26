import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import Constants from "expo-constants";
import Header from "./header";
import CustomButton from "./customButton";

const BusinessSignUp = ({ navigation }) => {
  const userTypeHandler = () => {
    navigation.navigate("QRCodePage");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Sign Up" navigation={navigation}></Header>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            This is business sign up Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
          <CustomButton name="Next" onPress={userTypeHandler} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
    alignItems: "center",
    marginTop: 0,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "#262D37",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default BusinessSignUp;
