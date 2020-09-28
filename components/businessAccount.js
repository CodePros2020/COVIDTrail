import React, { Component } from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { Divider, Text, RadioButton } from "react-native-paper";
import HeaderWide from "./HeaderWide";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NetworkContext } from "../NetworkContext";

const BusinessAccount = ({ navigation }) => {
  const network = React.useContext(NetworkContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderWide title="Account"></HeaderWide>
        <View style={styles.mainView}>
          <Text style={styles.textField}>NAME</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}>{network.businessName}</Text>
            <Icon
              name="chevron-right"
              style={styles.icon}
              onPress={() =>
                navigation.navigate("EditBusinessName", {
                  name: network.businessName,
                })
              }
            />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Divider style={{ backgroundColor: "#979797" }} />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>ADDRESS</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}>
              {network.addressLine1} {network.addressLine2 || ""},&nbsp;
              {network.city}, {network.province} &nbsp;
              {network.postalCode}
            </Text>
            <Icon name="chevron-right" style={styles.icon} />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Divider style={{ backgroundColor: "#979797" }} />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>PHONE</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}>{network.phone}</Text>
            <Icon name="edit" style={styles.icon} />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Divider style={{ backgroundColor: "#979797" }} />
          </View>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.textField}>EMAIL</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}>{network.email || ""}</Text>
            <Icon name="edit" style={styles.icon} />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Divider style={{ backgroundColor: "#979797" }} />
          </View>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.textField}>PASSWORD</Text>

          <View style={styles.subView}>
            <Text style={styles.subTxtField}>********</Text>
            <Icon name="edit" style={styles.icon} />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Divider style={{ backgroundColor: "#979797" }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BusinessAccount;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    marginTop: 0,
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#262D37",
    alignItems: "center",
    color: "#fff",
  },
  mainView: {
    flexDirection: "column",
    alignSelf: "stretch",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  subView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingTop: 10,
  },
  textField: {
    color: "#00C0C1",
    fontSize: 14,
  },
  subTxtField: {
    color: "#fff",
    fontSize: 18,
  },
  icon: {
    color: "#979797",
    fontSize: 18,
  },
});
