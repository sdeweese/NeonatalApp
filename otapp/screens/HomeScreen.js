import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go To Modules"
          onPress={() => this.props.navigation.navigate("Modules")}
        />
        <Button
          title="Resources Map"
          onPress={() => this.props.navigation.navigate("Resources")}
        />
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row"
  }
});