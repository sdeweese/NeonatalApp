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
import MessagesList from "./components/MessagesList";

const STORAGE_KEY = "MESSAGES";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      schedule: "",
      messages: [],
    };
  }
  componentDidMount() {
    //const newMessage = this.props
    //this.setState()
    let m = this.getMessages();
    this.setState({ m });
  }
  async saveMessages(messages) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.log(error, "Not saved properly");
    }
  }
  async getMessages() {
    try {
      let messages = await AsyncStorage.getItem(STORAGE_KEY);
      if (messages !== null) {
        return JSON.parse(messages);
      } else {
        return [];
      }
    } catch (error) {
      console.log(error, "Not found");
    }
  }

  async updateMessages(newMessage) {
    try {
      let messages = await this.getMessages();
      console.log(newMessage);
      messages.push(newMessage);
      this.saveMessages(messages);
      this.setState({ messages });
    } catch (error) {
      console.log("Error fetching messages", error);
    }
  }

  async removeMessage() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
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
        <View>
          <Text>NEW MESSAGE</Text>
          <Text>Title:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ title: text })}
          />

          <Text>Message:</Text>
          <TextInput
            style={styles.message}
            multiline={true}
            onChangeText={(text) => this.setState({ body: text })}
          />

          <Text>Scheduled for:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ schedule: text })}
          />

          <Button
            title="Submit"
            onPress={() => {
              this.updateMessages({
                title: this.state.title,
                body: this.state.body,
                schedule: this.state.schedule,
              });
            }}
          />
        </View>
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
        <MessagesList data={this.state.messages} />
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
