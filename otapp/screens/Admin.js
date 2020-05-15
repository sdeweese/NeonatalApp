import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

class Admin extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Database"
          onPress={() => this.props.navigation.navigate("Database")}
        />
        <Button
          title="Messages"
          onPress={() => this.props.navigation.navigate("Messages")}
        />
        <Button
          title="Restore Backup"
          onPress={() => this.props.navigation.navigate("Backup")}
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
    flexDirection: "row",
    backgroundColor: "#f2dac8" //peach
  },
});
