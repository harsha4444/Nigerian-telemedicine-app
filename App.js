import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import SplashScreen from "./src/screens/SplashScreen";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Appointment from "./src/screens/Appointment";
import Success from "./src/screens/Success";

import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Appointment: {
    screen: Appointment
  },
  Success: {
    screen: Success
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    SplashScreen: {
      screen: SplashScreen
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    },
    Appointment: {
      screen: Appointment
    },
    Success: {
      screen: Success
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "AmericanTypewriter-CondensedBold": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Helvetica-Oblique": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      Tahoma: require("./src/assets/fonts/Tahoma.ttf")
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
