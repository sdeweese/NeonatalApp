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
      await AsyncStorage.setItem(email, pass);
      alert("Account created successfully.");
      console.log("Account created successfully.");
      console.log(email);
      console.log(pass);
    } catch (error) {
      console.log("Error creating account.", error);
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
          onPress={() => this.storeUser(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}> SUBMIT </Text>
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
});
