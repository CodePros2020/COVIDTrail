import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text, RadioButton } from "react-native-paper";
import CustomButton from "./CustomButton";

const UserType = ({ navigation }) => {
  const [value, setValue] = React.useState("personal");
  const businessSignUp = () => {
    if (value === "business") {
      navigation.navigate("BusinessSignUp");
    } else {
      navigation.navigate("ClientSignUp");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logoStyle} />
      <Text style={styles.titleHeading}>User Type</Text>
      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <View style={styles.divider}>
          <View>
            <RadioButton value="personal" uncheckedColor="#00C0C1" />
          </View>
          <View>
            <Text style={styles.radioText}>Personal</Text>
          </View>
        </View>
        <View style={styles.divider}>
          <View>
            <RadioButton value="business" uncheckedColor="#00C0C1" />
          </View>
          <View>
            <Text style={styles.radioText}>Business</Text>
          </View>
        </View>
      </RadioButton.Group>

      <View style={styles.gap}>
        <CustomButton name="Next" style="loginBtn" onPress={businessSignUp} />
        <Text style={styles.cancel} onPress={() => navigation.goBack()}>
          Cancel
        </Text>
      </View>
    </View>
  );
};
export default UserType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
    alignItems: "center",
    marginTop: 0,
  },
  viewStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262D37",
    borderBottomWidth: 1,
    borderBottomColor: "#707070",
    height: 60,
    marginLeft: 10,
    color: "#ffffff",
  },
  logoStyle: {
    height: 250,
    width: 300,
  },
  loginBtn: {
    height: 45,
    width: 250,
    borderColor: "#00C0C1",
    borderWidth: 1,
    backgroundColor: "#262D37",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#262D37",
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",
    backgroundColor: "#262D37",
    borderColor: "#00C0C1",
    color: "#00C0C1",
  },
  label: {
    color: "#696969",
  },
  labelView: {
    marginTop: 20,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262D37",
    padding: 10,
  },
  line: {
    marginTop: 30,
    borderBottomColor: "#707070",
    borderBottomWidth: 1,
    width: 325,
  },
  titleHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00C0C1",
    marginBottom: 30,
  },
  btnText: {
    fontSize: 20,
    color: "#00C0C1",
  },
  divider: {
    borderTopColor: "#707070",
    borderTopWidth: 1,
    borderBottomColor: "#707070",
    borderBottomWidth: 1,
    width: 375,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  radioText: {
    color: "#00C0C1",
    fontSize: 25,
  },
  gap: {
    marginTop: 30,
  },
  cancel: {
    marginTop: 20,
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
  },
});
