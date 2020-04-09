import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Admin extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Database"
          onPress={() => this.props.navigation.navigate("Database", '')}
        />
        <Button
          title="Messages"
          onPress={() => this.props.navigation.navigate("Messages")}
        />
      </View>
    );
  }
}
export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row"
  }
});
