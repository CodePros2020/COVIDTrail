import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.button }}>
        <Text style={{ ...styles.buttonText }}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "#262D37",
    borderColor: "#00C0C1",
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    height: 45,
    textAlign: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#00C0C1",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 5,
  },
});

export default CustomButton;
