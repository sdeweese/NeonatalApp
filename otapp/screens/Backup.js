import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Backup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Upload File"
          color="#955d74" //dark pink
        />
      </View>
    );
  }
}
export default Backup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "#f2dac8" //peach
  }
});