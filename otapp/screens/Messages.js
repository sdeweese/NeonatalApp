import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  Linking,
  TouchableOpacity,
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
    const { input } = this.state
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
        <ExpandableItem title="Add a New Mother">
            <Text>Mother's Name:</Text>
            <TextInput style={styles.input}
                onChangeText = {MotherName => this.setState({MotherName: MotherName})} />

            <Text>Child's Name:</Text>
            <TextInput style={styles.input}
                onChangeText = {ChildName => this.setState({ChildName: ChildName})} />                   

            <Text>Date of Birth:</Text>
            <TextInput style={styles.input}
                onChangeText = {DoB => this.setState({DoB: DoB})} />                   

            <Text>Child is Born:</Text>
            <TextInput style={styles.input}
                onChangeText = {Born => this.setState({Born: Born})} />                   

            <Text>Phone Number:</Text>
            <TextInput style={styles.input}
                onChangeText = {Phone => this.setState({Phone: Phone})} />                   

            <Text>Notes:</Text>
            <TextInput style={styles.input}
                onChangeText = {Notes => this.setState({Notes: Notes})} />                   
            <Text>{"\n"}</Text>
            <Button style={styles.btn}
                title="Submit"
                onPress={() => {this.setNewMother(this.state.Phone, 
                    { MotherName: this.state.MotherName, ChildName: this.state.ChildName, DoB: this.state.DoB, 
                        Born: this.state.Born, Phone: this.state.Phone, Notes: this.state.Notes
                    }
                    )}}
            />            
          {/* {AsyncStorage.getItem(MotherName)}
          {this.props.navigation.state.params.MotherName} */}
        </ExpandableItem>
        <ExpandableItem title="Natukunda">  
          <Text style={styles.expand}>
            Child's Name: Balondemu {'\n'}
            Date of Birth: March 24th, 2020 {'\n'}
            Born: Yes {'\n'}
            Phone Number: 41 589 4931 {'\n'}
            Notes: 
          </Text>
        </ExpandableItem>
        <ExpandableItem title="Tukesiga">
          <Text style={styles.expand}>
            Child's Name: Dembe {'\n'}
            Date of Birth: February 29th, 2020 {'\n'}
            Born: Yes {'\n'}
            Phone Number: 41 902 2938 {'\n'}
            Notes: Tukesiga is planning to come back on March 20th
          </Text>
        </ExpandableItem>
        <MessagesList data={this.state.messages} />
        <Button title="Delete All" onPress={this.removeAll} />
      </ScrollView>
    );
  }
}

export default Database;

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
