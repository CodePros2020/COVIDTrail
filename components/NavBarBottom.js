import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconScan from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import ScanPage from "./ScanPage";
import AccountPage from "./AccountPage";
import IndividualLogsPage from "./IndividualLogsPage";
import IndividualLogsDetailPage from "./IndividualLogsDetailPage";

const Tab = createBottomTabNavigator();
const LogStack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="ScanPage"
      tabBarOptions={{
        activeTintColor: "#00C0C1",
        activeBackgroundColor: "#262D37",
        inactiveBackgroundColor: "#262D37",
      }}
    >
      <Tab.Screen
        name="ScanPage"
        component={ScanPage}
        options={{
          tabBarLabel: "Scan",
          tabBarIcon: ({ color, size }) => (
            <IconScan name="qrcode-scan" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="BusinessAccount"
        component={BusinessAccount}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LogsStackScreen"
        component={LogsStackScreen}
        options={{
          tabBarLabel: "Logs",
          tabBarIcon: ({ color, size }) => (
            <Icon name="list-alt" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function LogsStackScreen() {
  return (
    <LogStack.Navigator screenOptions={{ headerShown: false }}>
      <LogStack.Screen
        name="IndividualLogsPage"
        component={IndividualLogsPage}
        // options={{ tabBarLabel: 'Settings!' }}
      />
      <LogStack.Screen
        name="IndividualLogsDetailPage" 
        component={IndividualLogsDetailPage}
      />
    </LogStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}

const NavBarBottom = () => {
  return (
    <View style={styles.mainHeader}>
      <IconScan name="qrcode-scan" size={24} color="#00C0C1" />
      <Icon name="user" size={24} color="#707070" />
      <Icon name="list-alt" size={24} color="#707070" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    padding: 10,
  },
});

// export default NavBarBottom;
