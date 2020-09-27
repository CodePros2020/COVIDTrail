import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import MSSQL from 'react-native-mssql';

import WelcomePage from "./components/welcomePage";
import UserType from "./components/userType";
import BusinessSignUp from "./components/businessSignUp";
import ClientSignUp from "./components/clientSignUp";
// import ScanPage from "./components/ScanPage";
import NavBarBottom from "./components/navBarBottom";
import QRCodePage from "./components/qrCodePage";
import BusinessLogsPage from "./components/businessLogsPage";

const Stack = createStackNavigator();

// const config = {
//   server: 'sqlservercovidtrail.database.windows.net',
//   username: 'codepros',
//   password: '@Covidtrail123',
//   database: 'sqlcovidtrail',
//   port: 8080,
//   timeout: 30
// }
// MSSQL.connect(config);
// =======
export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="UserType" component={UserType} />
            <Stack.Screen name="BusinessSignUp" component={BusinessSignUp} />
            <Stack.Screen
              name="BusinessLogsPage"
              component={BusinessLogsPage}
            />
            <Stack.Screen name="ClientSignUp" component={ClientSignUp} />
            <Stack.Screen name="NavBarBottom" component={NavBarBottom} />
            <Stack.Screen name="QRCodePage" component={QRCodePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    paddingTop: 60,
  },
});
