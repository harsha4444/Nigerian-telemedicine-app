import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Button71 from "../symbols/button71";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default class Appointment extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Center horizontal>
          <Text style={styles.text}>Appointment</Text>
        </Center>
        <Text style={styles.text2} />
        <TextInput style={styles.textInput} placeholder="Name" />
        <TextInput style={styles.textInput2} placeholder="Gender" />
        <TextInput style={styles.textInput3} placeholder="Age" />
        <TextInput style={styles.textInput4} placeholder="Phone no" />
        <TextInput style={styles.textInput5} placeholder="Problem" />
        <TextInput style={styles.textInput6} placeholder="Place" />
        <Center horizontal>
          <Button71 style={styles.button71} buttonContent="Apply Appointment" />
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
  text: {
    top: 97.99,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 25
  },
  text2: {
    top: 187.63,
    left: 81.06,
    position: "absolute",
    backgroundColor: "transparent"
  },
  textInput: {
    top: 176.5,
    left: 79,
    position: "absolute",
    backgroundColor: "transparent",
    height: 25,
    width: 80,
    fontSize: 24
  },
  textInput2: {
    top: 246.56,
    left: 80,
    width: 80,
    height: 26,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24
  },
  textInput3: {
    top: 306,
    left: 80,
    width: 80,
    height: 33.41,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24
  },
  textInput4: {
    top: 373,
    left: 83,
    width: 122.63,
    height: 33,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24
  },
  textInput5: {
    left: 83,
    width: 122,
    height: 33,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    top: "54.19%"
  },
  textInput6: {
    left: 83,
    width: 122,
    height: 33,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    top: "62.19%"
  },
  button71: {
    top: 635,
    position: "absolute",
    height: 44
  }
});
