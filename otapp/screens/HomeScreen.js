import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Educational Modules (light pink)"
          color="#c691a7" //light pink
          onPress={() => this.props.navigation.navigate("Modules")}
        />
        <Button
          title="Resources Map (dark pink)"
          color="#955d74" //dark pink
          onPress={() => this.props.navigation.navigate("Resources")}
        />
        <Button
          title="Administrator (dark brown)"
          color="#6e412d" //dark brown
          onPress={() => this.props.navigation.navigate("Login")}
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
    flexDirection: "row",
    backgroundColor: "#f2dac8"
  },
});
