import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Educational Modules"
          color="#955d74" //dark pink
          onPress={() => this.props.navigation.navigate("Modules")}
        />
        <Button
          title="Resources Map"
          color="#955d74" //dark pink
          onPress={() => this.props.navigation.navigate("Resources")}
        />
        <Button
          title="Administrator"
          color="#955d74" //dark pink
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
