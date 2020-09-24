import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//This Navigator Component is used for setting up the screen components and the navigation prop to be used in each of the screen components

//import the page components
import WelcomePage from "./components/WelcomePage";
import ClientSignUp from "./components/ClientSignUp";
import SignInPage from "./components/SignInPage";
import QRCodePage from "./components/QRCodePage";

//initialize the different screens with its name and component
const routesNavigator = createStackNavigator(
  {
    Home: { screen: WelcomePage },
    SignIn: { screen: SignInPage },
    SignUp: { screen: ClientSignUp },
    QRCode: { screen: QRCodePage },
  },
  {
    initialRouteName: "Home",
    //initialRouteName: 'UserHomePage',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 27,
      },
    },
  }
);

export default createAppContainer(routesNavigator);
