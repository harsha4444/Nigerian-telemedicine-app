import React, { Component } from "react";

import { Center } from "@builderx/utils";
import Button1 from "../symbols/button1";
import { View, StyleSheet, TextInput, Text } from "react-native";

export default class Register extends Component {
  render() {
    return (
      <View style={styles.root}>
        <TextInput placeholder="First Name" style={styles.textInput} />
        <TextInput style={styles.textInput2} placeholder="Last Name" />
        <TextInput style={styles.textInput3} placeholder="Email" />
        <Center vertical>
          <TextInput style={styles.textInput4} placeholder="Password" />
        </Center>
        <TextInput style={styles.textInput5} placeholder="Gender" />
        <TextInput style={styles.textInput6} placeholder="Phone No" />
        <Button1 style={styles.button1} buttonContent="Register" />
        <TextInput style={styles.textInput7} placeholder="Register Details" />
        <TextInput
          style={styles.textInput8}
          placeholder="Register Details"
          autoCapitalize="sentences"
        />
        <Text style={styles.text9}>First Name</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  textInput: {
    height: 53.05,
    width: 263.04,
    top: 154.72,
    left: 43.24,
    position: "absolute",
    fontSize: 21
  },
  textInput2: {
    top: 231.33,
    left: 43,
    width: 264,
    height: 54,
    position: "absolute",
    fontSize: 21
  },
  textInput3: {
    top: 310,
    left: 43,
    width: 264,
    height: 54,
    position: "absolute",
    fontSize: 21
  },
  textInput4: {
    left: 43,
    width: 264,
    height: 54,
    position: "absolute",
    fontSize: 21
  },
  textInput5: {
    left: 43,
    width: 264,
    height: 54,
    position: "absolute",
    fontSize: 21,
    top: "56.47%"
  },
  textInput6: {
    top: "66.6%",
    left: 43,
    width: 264,
    height: 54,
    position: "absolute",
    fontSize: 21
  },
  button1: {
    top: 648.41,
    left: 132,
    position: "absolute",
    height: 43
  },
  textInput7: {
    top: 76,
    left: 79.69,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(41,38,38,1)",
    fontSize: 25,
    height: 51,
    width: 184.31
  },
  textInput8: {
    top: 78,
    left: 506.34,
    width: "49.07%",
    height: "6.04%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 25,
    color: "rgba(41,38,38,1)"
  },
  text9: {
    top: 164.1,
    left: 466.5,
    width: 263,
    height: 53,
    position: "absolute",
    fontSize: 21
  }
});
