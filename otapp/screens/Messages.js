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
    this.removeMessage = this.removeMessage.bind(this);
  }
  componentDidMount() {
    this.getMessages();
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
        messages = JSON.parse(messages);
      } else {
        messages = [];
      }
      this.setState({ messages });
      return messages;
    } catch (error) {
      console.log(error, "Not found");
    }
  }

  async updateMessages(newMessage) {
    try {
      let messages = await this.getMessages();
      console.log(newMessage);
      if (messages.includes(newMessage)) {
        //this doesn't rly work...
        alert("Cannot create duplicate message.");
      } else {
        messages.push(newMessage);
        this.saveMessages(messages);
        this.setState({ messages });
      }
    } catch (error) {
      console.log("Error fetching messages", error);
    }
  }

  handleMessage = () => {
    if (this.state.title && this.state.body && this.state.schedule) {
      this.updateMessages({
        title: this.state.title,
        body: this.state.body,
        schedule: this.state.schedule,
      });
    } else {
      alert("Message fields cannot be blank.");
    }
  };

  removeMessage = async (message) => {
    try {
      let messages = await this.getMessages();
      messages = messages.filter((val, index, arr) => val !== message);
      this.saveMessages(messages);
      this.setState({ messages });
    } catch (error) {
      console.log(error + ": error removing data");
    }
  };

  removeAll = async () => {
    try {
      let huh = await AsyncStorage.removeItem(STORAGE_KEY);
      console.log(huh);
      this.setState({ messages: [] });
    } catch (error) {
      console.log(error + ": Remove all messages failed.");
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Messaging Portal</Text>
        </View>
        <View>
          <ExpandableItem title="NEW MESSAGE">
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

            <Button title="Submit" onPress={this.handleMessage} />
          </ExpandableItem>
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
        {this.state.messages.map((message) => (
          <ExpandableItem title={message.schedule} key={message.schedule}>
            <Text>Title: {message.title}</Text>
            <Text>Message: {message.body}</Text>
            <Text>Scheduled for: {message.schedule}</Text>
            <Button
              title="Delete"
              onPress={async () => {
                try {
                  let messages = await this.getMessages();
                  messages = messages.filter((val) => {
                    return val.schedule !== message.schedule;
                  });
                  this.saveMessages(messages);
                  this.setState({ messages });
                } catch (error) {
                  console.log(error + ": error removing data");
                }
              }}
            />
          </ExpandableItem>
        ))}
        <Button title="Delete All" onPress={this.removeAll} />
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
    height: "20%",
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 15,
    textAlignVertical: "top",
  },
  newM: {
    backgroundColor: "black",
    color: "white",
  },
});
