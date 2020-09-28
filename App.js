import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "./components/WelcomePage";
import UserType from "./components/UserType";
import BusinessSignUp from "./components/BusinessSignUp";
import ClientSignUp from "./components/ClientSignUp";
import NavBarBottom from "./components/NavBarBottom";
import EditBusinessName from "./components/EditBusinessName";

const Stack = createStackNavigator();
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
              name="EditBusinessName"
              component={EditBusinessName}
            />
            <Stack.Screen name="ClientSignUp" component={ClientSignUp} />
            <Stack.Screen name="NavBarBottom" component={NavBarBottom} />
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
