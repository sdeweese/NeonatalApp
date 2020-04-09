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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  async login(email, pass) {
    try {
      const userData = await AsyncStorage.getItem(email);
      if (userData !== null && userData === pass) {
        alert("Log in successful!");
        this.props.navigation.navigate("Admin");
      } else {
        alert("Log in failed :(");
      }
    } catch (error) {
      console.log("User not found.", error);
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}> SUBMIT </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.new}
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text style={styles.newText}>New User? Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

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
    paddingLeft: 15,
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
  new: {
    padding: 10,
    margin: 5,
    alignItems: "center",
  },
  newText: {
    color: "skyblue",
  },
});
