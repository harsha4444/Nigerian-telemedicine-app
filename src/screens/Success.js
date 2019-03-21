import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Image } from "react-native";

export default class Success extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Center horizontal>
          <Image
            source={require("../assets/output-onlinepngtools.png")}
            style={styles.image}
          />
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  image: {
    height: 601.37,
    width: 301,
    position: "absolute",
    top: "11.58%"
  }
});
