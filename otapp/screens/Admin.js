import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail = (text) => {
    this.setState({ email: text });
  };

  handlePassword = (text) => {
    this.setState({ password: text });
  };

  login = (email, pass) => {
    if (email == "omwanathrive@gmail.com" && pass == "123") {
      alert("Log in successful!");
      return true;
    } else {
      alert("Log in failed :(");
      return false;
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}> SUBMIT </Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Button
            title="Database"
            onPress={() => this.props.navigation.navigate("Database")}
          />
          <Button
            title="Messages"
            onPress={() => this.props.navigation.navigate("Messages")}
          />
        </View>
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
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "black",
    padding: 10,
    margin: 15,
    alignItems: "center",
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
