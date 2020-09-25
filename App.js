import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, AppRegistry } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import { Provider as PaperProvider } from "react-native-paper";

// import MSSQL from 'react-native-mssql';

import WelcomePage from "./components/WelcomePage";
import UserType from "./components/UserType";

// <<<<<<< HEAD
//       <CustomButton name="Login" style="loginBtn" />
//       <View style={styles.line}></View>
//       <View style={styles.signUp}>
//         <Text style={styles.label}>
//           Don't have an account?
//           <Text
//             style={{ color: "#00C0C1", paddingLeft: 10 }}
//             // onPress={() => Linking.openURL("http://google.com")}
//           >
//             Sign Up
//           </Text>
//         </Text>
//       </View>
//     </View>
//   );
// };

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
        <NativeRouter>
          <View style={styles.container}>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/userType" component={UserType} />
            </Switch>
          </View>
        </NativeRouter>
      </PaperProvider>
    );
  }
}
