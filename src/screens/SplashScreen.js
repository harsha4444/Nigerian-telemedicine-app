import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Button31 from "../symbols/button31";
import { View, StyleSheet, Image, Text } from "react-native";

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text} />
        <Center horizontal>
          <Button31
            style={styles.button31}
            onPress={() => {
              this.props.navigation.push("Login");
            }}
            buttonContent="Get Started "
            root={() => {
              this.props.navigation.push("Login");
            }}
          />
        </Center>
        <Image
          style={styles.image2}
          source={require("../assets/output-onlinepngtools.png")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    padding: 100
  },
  image: {
    height: 343.07,
    width: 338,
    margin: 95,
    alignSelf: "center"
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    margin: 95
  },
  button31: {
    top: 553.39,

    position: "absolute",
    height: 45
  },
  image2: {
    height: 534,
    width: 299,
    position: "absolute",
    left: "897.33%",
    top: "17.1%"
  }
});
