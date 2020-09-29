import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import HeaderWide from "./HeaderWide";
import { BarCodeScanner } from "expo-barcode-scanner";
import API from "../api";

export default class ScanPage extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <HeaderWide title="Scan" navigation={navigation} />
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          //   style={[StyleSheet.absoluteFillObject, styles.scanner]}
          style={styles.scanner}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });

    Alert.alert(
      "Success",
      `Bar code with type ${type} and data ${data} has been scanned!`,
      [{ text: "OK", onPress: () => saveVisit() }]
    );
  };
  saveVisit = () => {
    API.get("api/placesVisitedLog?businessId=1&userId=" + id)
      .then((response) => {
        account = response.data;
        alert("Data received" + JSON.stringify(response.data));
        // navigation.navigate("NavBarBottom", { accountId: account.id });
      })
      .catch((e) => {
        (error) => {
          console.error(error);
          alert("Error is " + error);
        };
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  scanner: {
    height: "80%",
    width: Dimensions.get("window").width,
    marginTop: 0,
    borderColor: "#979797",
    backgroundColor: "#262D37",
    marginBottom: 30,
  },
});
