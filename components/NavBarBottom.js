import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import Icon from "react-native-vector-icons/FontAwesome";
import IconScan from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ScanPage from "./ScanPage";
import IndividualLogsPage from "./IndividualLogsPage";
import IndividualLogsDetailPage from "./IndividualLogsDetailPage";
import BusinessAccount from "./BusinessAccount";
import BusinessLogsPage from "./BusinessLogsPage";
import EditBusinessName from "./EditBusinessName";
import { NetworkContext } from "../NetworkContext";
import QRCodeGenerator from "./QRCodePage";
import EditClientName from "./EditClientName";
import EditAddress from "./EditAddress";
import API from '../api';
import EditEmail from "./EditEmail";
import EditPhone from "./EditPhone";
import EditPassword from "./EditPassword";
import Session from "../sessionService";
import WelcomePage from "./WelcomePage";

const Tab = createBottomTabNavigator();
const LogStack = createStackNavigator();
const AccountStack = createStackNavigator();
const ScanStack = createStackNavigator();
const BusinessLogStack = createStackNavigator();

let loggedInAccount;
let loggedInAccount2;

function MyTabs({ navigation }) {
  return (
    <NetworkContext.Provider value={loggedInAccount}>
      <Tab.Navigator
        initialRouteName="BusinessAccount"
        tabBarOptions={{
          activeTintColor: "#00C0C1",
          activeBackgroundColor: "#262D37",
          inactiveBackgroundColor: "#262D37",
        }}
      >
        <Tab.Screen
          component={ScanStackScreen}
          name="ScanPage"
          options={{
            tabBarLabel: loggedInAccount.businessName !== null ? "QR Code" : "Scan",
            tabBarIcon: ({ color, size }) => (
              <IconScan name="qrcode-scan" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="BusinessAccount"
          component={AccountStackScreen}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="LogsStackScreen"
          component={
            loggedInAccount.businessName !== null
              ? BusinessLogsStackScreen
              : LogsStackScreen
          }
          options={{
            tabBarLabel: "Logs",
            tabBarIcon: ({ color, size }) => (
              <Icon name="list-alt" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NetworkContext.Provider>
  );
}

function ScanStackScreen() {
  return (
    <ScanStack.Navigator screenOptions={{ headerShown: false }}>
      <ScanStack.Screen
        name="IndividualLogsPage"
        component={loggedInAccount.businessName !== null ? QRCodeGenerator : ScanPage}
      />
      {/* <ScanStack.Screen
        name="WelcomePage"
        component={WelcomePage}
      /> */}
    </ScanStack.Navigator>
  );
}

function LogsStackScreen() {
  return (
    <LogStack.Navigator screenOptions={{ headerShown: false }}>
      <LogStack.Screen
        name="IndividualLogsPage"
        component={IndividualLogsPage}
      />
      <LogStack.Screen
        name="IndividualLogsDetailPage"
        component={IndividualLogsDetailPage}
      />
    </LogStack.Navigator>
  );
}

function BusinessLogsStackScreen() {
  return (
    <BusinessLogStack.Navigator screenOptions={{ headerShown: false }}>
      <BusinessLogStack.Screen
        name="BusinessLogsPage"
        component={BusinessLogsPage}
      />
    </BusinessLogStack.Navigator>
  );
}

function AccountStackScreen() {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen name="BusinessAccount" component={BusinessAccount} />
      <AccountStack.Screen
        name="EditNameScreen"
        component={
          loggedInAccount.businessName !== null
            ? EditBusinessName
            : EditClientName
        }
      />
      <AccountStack.Screen name="EditAddress" component={EditAddress} />
      <AccountStack.Screen name="EditPhone" component={EditPhone} />
      <AccountStack.Screen name="EditEmail" component={EditEmail} />
      <AccountStack.Screen name="EditPassword" component={EditPassword} />
    </AccountStack.Navigator>
  );
}

export default function Tabs({ route, navigation }) {
  const { account } = route.params;
  loggedInAccount = account;
  console.log("Logged In User: ", JSON.stringify(loggedInAccount));
  const [session, setSession] = useState();
  const [userId, setUserId] = useState();
  // console.log('Checking token: ', Session.getToken('COVIDTrail'));

  // useEffect( () => {

  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('id')
  //       if(value !== null) {
  //         setUserId(value);
  //       } else {
  //         console.log('id value is null');
  //       }
  //     } catch(e) {
  //       console.log('error getting async id', e);
  //     }
  //   }

  //   console.log('is it coming here use effect')

  //   getData();
  // }, []);

  // useEffect( () => {

  //   async function getSession() {

  //     let acctType;

  //     console.log('check if id is coming here', userId);

  //     if (loggedInAccount.businessName !== null) {
  //       acctType = 'businessAccount';
  //     } else {
  //       acctType = 'userAccount'
  //     }

  //     await API.get('api/' + acctType + '/' + loggedInAccount.id)
  //       .then((response) => {

  //         var account = response.data;
  //         console.log('session', JSON.stringify(account));

  //   }).catch(error => {
  //         alert('Error retrieving user!' + error);
  //     });
  //   }
    
  //   getSession();

  //   // const getData = async () => {
  //   //   try {
  //   //     const jsonValue = await AsyncStorage.getItem('session')
  //   //     const value = jsonValue != null ? JSON.parse(jsonValue) : null;
  //   //     setSession(value);
  //   //     return value;
  //   //   } catch(e) {
  //   //     console.log('error getting data')
  //   //   }
  //   // }
  //   // getData();
  // }, []);

  

  return (
    // <NavigationContainer independent={true}>
      <MyTabs />
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainHeader: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    padding: 20,
  },
});