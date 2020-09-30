import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  VirtualizedList,
  Dimensions,
  Divider,
  CheckBox,
  TextInput,
} from "react-native";
import HeaderWide from "./HeaderWide";
import CustomButton from "./CustomButton";
import { NetworkContext } from "../NetworkContext";
import API from "../api";
// import Session from "./serviceSession.js";

const BusinessLogsPage = ({ navigation }) => {
  const network = React.useContext(NetworkContext);
  const { logsData, setLogsData } = useState("");

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       API.get("api/placesVisitedLog/" + network.id + "/business/")
  //         .then((res) => {
  //           setLogsData(res.data);
  //           alert("dATA Is " + res.data);
  //         })
  //         .catch((error) => {
  //           alert("Unable to get logs " + error);
  //         });
  //     };
  //     fetchData();
  //   }, []);

  const DATA = [];
  const [isSelected, setSelection] = React.useState(false);
  const getItem = (data, index) => {
    return {
      id: Math.random().toString(12).substring(0),
      //   title: `Item ${index + 1}`,
      title: `September ${index + 1}`,
    };
  };

  const getItemCount = (data) => {
    return 10;
  };

  const Item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: "#00C0C1", false: "white" }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderWide title="Logs" navigation={navigation} />

        <View style={{ width: Dimensions.get("window").width }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: "10%",
            }}
          >
            <Text style={styles.title}>Select All</Text>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
              tintColors={{ true: "#00C0C1", false: "white" }}
            />
          </View>

          <VirtualizedList
            data={DATA}
            initialNumToRender={4}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.key}
            getItemCount={getItemCount}
            getItem={getItem}
          />
        </View>

        <View style={{ flexDirection: "column", padding: 10 }}>
          <Text
            style={{
              color: "#00C0C1",
              fontSize: 20,
            }}
          >
            Email
          </Text>
          <TextInput
            style={styles.subTxtField}
            onChangeText={(value) => setState({ name: value })}
            value={state.name}
            spellCheck={false}
            autoCorrect={false}
            maxLength={100}
          ></TextInput>
        </View>
        <View style={{ marginBottom: 10 }}>
          <CustomButton name="Send" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#262D37",
    alignItems: "center",
    marginTop: 0,
    paddingTop: 0,
    // marginTop: Constants.statusBarHeight,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "#262D37",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "darkgrey",
    backgroundColor: "#262D37",
    color: "#00C0C1",
    height: 50,
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  checkbox: {
    alignSelf: "center",
    backgroundColor: "#262D37",
    borderColor: "#00C0C1",
    color: "#00C0C1",
  },
});

export default BusinessLogsPage;
