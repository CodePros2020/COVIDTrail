import { StatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet, View, AppRegistry } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import { Provider as PaperProvider } from 'react-native-paper';

// import MSSQL from 'react-native-mssql';

import WelcomePage from "./components/WelcomePage";
import UserType from "./components/UserType";

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <NativeRouter>
          <View style={styles.container}>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/userType" component={UserType} />
            </Switch>
          </View>
        </NativeRouter>
      </PaperProvider>
    )
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
  }
});

// const config = {
//   server: 'sqlservercovidtrail.database.windows.net',
//   username: 'codepros',
//   password: '@Covidtrail123',
//   database: 'sqlcovidtrail',
//   port: 8080,
//   timeout: 30
// }
// MSSQL.connect(config);
