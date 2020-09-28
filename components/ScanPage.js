import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Linking,
  TouchableOpacity,
  Alert,
  AppRegistry,
} from "react-native";
import Constants from "expo-constants";
import HeaderWide from "./HeaderWide";
// import QRCodeScanner from "react-native-qrcode-scanner";
// import { RNCamera } from "react-native-camera";

const ScanPage = ({ navigation, route }) => {
  //   ifScaned = (e) => {
  //     Linking.openURL(e.data).catch((err) =>
  //       Alert.alert("Invalid QRCode", e.data)
  //     );
  //   };

  // const { account } = route.params;
  // {JSON.stringify(account)}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderWide title="Scan"></HeaderWide>
  <Text style={{ color: "#fff" }}>In SCAN PAGE</Text>
        {/* <QRCodeScanner
          onRead={this.ifScaned}
          reactivate={true}
          permissionDialogMessage="Need permission to access camera."
          reactivateTimeout={10}
          showMarker={true}
          markerStyle={{ borderColor: "#fff", borderRadius: 10 }}
          bottomContent={
            <TouchableOpacity>
              <Text style={{ fontSize: 20, color: "red" }}>Scan QRCode</Text>
            </TouchableOpacity>
          }
        // /> */}
        {/* <QRCodeScanner */}
        {/* //   onRead={this.onSuccess}
        //   flashMode={RNCamera.Constants.FlashMode.torch}
        //   topContent={ */}
        {/* //     <Text style={styles.centerText}>
        //       Go to{" "}
        //       <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
        //       your computer and scan the QR code.
        //     </Text>
        //   }
        //   bottomContent={ */}
        {/* //     <TouchableOpacity style={styles.buttonTouchable}>
        //       <Text style={styles.buttonText}>OK. Got it!</Text>
        //     </TouchableOpacity>
        //   }
        // /> */}
        {/* <ScrollView style={styles.scrollView}></ScrollView> */}
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

export default ScanPage;
