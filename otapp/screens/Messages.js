import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  Linking,
  View,
  Button,
  TextInput,
  AsyncStorage,
} from "react-native";
import ExpandableItem from "./components/ExpandableItem";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Message: "",
      Schedule: "",
    };
  }
  async saveMessage(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log("Key: " + key + " Saved Successfully");
      console.log(value);
    } catch (error) {
      console.log(error, "Not saved properly");
    }
  }
  async getMessage(key) {
    try {
      let value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log(value + " Returned Successfully");
        return value;
      } else {
        console.log("Sorry, key not found");
      }
    } catch (error) {
      console.log(error, "Not found");
    }
  }
  async removeMessage(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error + ": error removing data");
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Messaging Portal</Text>
        </View>
        <ExpandableItem title="NEW MESSAGE">
          <Text>Title:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ Title: text })}
          />

          <Text>Message:</Text>
          <TextInput
            style={styles.message}
            multiline={true}
            onChangeText={(text) => this.setState({ Message: text })}
          />

          <Text>Scheduled for:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ Schedule: text })}
          />

          <Button
            title="Submit"
            onPress={() =>
              this.saveMessage(this.state.Title, {
                Message: this.state.Message,
                Schedule: this.state.Schedule,
              })
            }
          />
        </ExpandableItem>
        <ExpandableItem title="2 Days">
          <Text style={styles.expand}>
            Remember to vaccinate your child against Polio and TB right after
            birth.
          </Text>
        </ExpandableItem>
        <ExpandableItem title="10 Days">
          <Text style={styles.expand}>
            After a week, baby’s umbilical cord should fall off naturally.
          </Text>
        </ExpandableItem>
      </ScrollView>
    );
  }
}

export default Messages;

const styles = StyleSheet.create({
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    paddingTop: 15,
    paddingBottom: 10,
  },
  expand: {
    margin: 10,
  },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 15,
  },
  message: {
    height: 300,
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 15,
  },
});
