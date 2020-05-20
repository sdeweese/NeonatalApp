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

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  async storeUser(email, pass) {
    try {
      if (
        (await AsyncStorage.getItem(email)) === null &&
        email.length > 6 &&
        pass.length > 6
      ) {
        await AsyncStorage.setItem(email, pass);
        alert("Account created successfully.");
        console.log("Account created successfully.");
        console.log(email);
        console.log(pass);
        this.setState({
          email: "",
          password: "",
        });
      } else {
        alert("Username is already taken or invalid username/password.");
      }
    } catch (error) {
      console.log("Error creating account.", error);
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          value={this.state.password}
        />
        <Text style={styles.text}>
          Password must be at least 6 characters long and contain one number.
        </Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.storeUser(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}> SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  background: {
    backgroundColor: "#f2dac8",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    paddingLeft: 15,
  },
  submitButton: {
    backgroundColor: "#682f2f", //maroon
    padding: 10,
    margin: 15,
    alignItems: "center",
    height: 40,
    marginBottom: 500,
  },
  submitButtonText: {
    color: "white",
  },
  text: {
    marginLeft: 15,
  },
});
