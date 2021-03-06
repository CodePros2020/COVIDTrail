import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import Header from "./Header";
import Moment from 'moment';

var width = Dimensions.get("window").width;

const AccountPage = ({ route, navigation }) => {
  const { date } = route.params;
  const { time } = route.params;
  const { name } = route.params;
  const { addressLine1 } = route.params;
  const { addressLine2 } = route.params;
  const { city } = route.params;
  const { province } = route.params;
  const { postalCode } = route.params;
  const { phone } = route.params;
  const { email } = route.params;

  const [address, setfullAddress] = useState('');

  useEffect( () => {
    let addLine2;

    if (addressLine2 !== null) {
      addLine2 = addressLine2;
    } else {
      addLine2 = '';
    }

    setfullAddress(addressLine1 + ' ' + addLine2 + ' ' + city + ' ' + province + ' ' + postalCode);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{ width: width }}>
          <Header title="Log Details" navigation={navigation}></Header>
        </View>

        <View style={styles.line}>
          <Text style={styles.label}>VISITED DATE AND TIME</Text>
          <Text style={styles.item}>
            {Moment(date).format('MMMM DD, YYYY')}, {Moment(time).format('LT')}
          </Text>
        </View>

        <View style={styles.line}>
          <Text style={styles.label}>NAME</Text>
          <Text style={styles.item}>{name}</Text>
        </View>

        <View style={styles.line}>
          <Text style={styles.label}>ADDRESS</Text>
          <Text style={styles.item}>{address}</Text>
        </View>

        <View style={styles.line}>
          <Text style={styles.label}>PHONE</Text>
          <Text style={styles.item}>{phone}</Text>
        </View>

        <View style={styles.line}>
          <Text style={styles.label}>EMAIL</Text>
          <Text style={styles.item}>{email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
    // alignItems: "center",
    marginTop: 0,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "#262D37",
    marginHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: "#00C0C1",
  },
  line: {
    backgroundColor: "#262D37",
    borderBottomWidth: 1,
    borderBottomColor: "#707070",
    padding: 10,
  },
  item: {
    fontSize: 16,
    marginTop: 10,
    color: "#fff",
  },
});

export default AccountPage;
