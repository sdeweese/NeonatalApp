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
      mothers: [], // list of ALL the mothers
    };
    this.removeMessage = this.removeMessage.bind(this);
  }
  componentDidMount() {
      this.getMessages();
      this.getMothers();
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

  async getMothers() {
    try {
      let mothers = await AsyncStorage.getItem("MOTHERS");
      if (mothers !== null) {
        mothers = JSON.parse(mothers);
      } else {
        mothers = [];
      }
      this.setState({ mothers });
      return mothers;
    } catch (error) {
      console.log(error, "Not found");
    }
  }

  calcAge(DoB) {  // need DoB (string)
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    
    // let's assume birth dates are entered as MM-DD-YYYY or M-D-YYYY etc. (can be separated by .,/- or space)
    let born = DoB.split(/[.,\/ -]/,2); // splits string into array of substrings ["month","date"]
    let birthmonth = parseInt(born[0]); // parseInt parses string and returns integer
    let birthdate = parseInt(born[1]);

    let age = 0; // number of days old
    if(month-birthmonth >= 2) {
      age = 29; // as in >28 days as in out of scope for app --> should be deleted
    } else if(birthmonth == month) {
      if(date >= birthdate) {
        age = date-birthdate;
      } else {  // birth date has not passed yet
        age = 0;
      }
    } else if((birthmonth == 2) && (year % 4 == 0)) { // feb leap year --> 29 days
      age = 29-birthdate+date;
    } else if(birthmonth == 2) {  // feb NOT leap year --> 28 days
      age = 28-birthdate+date;
    } else if((month <= 7 && month % 2 == 1) || (month >= 8 && month % 2 == 0)) { // jan,mar,may,jul,aug,oct,dec --> 31 days
      age = 31-birthdate+date;
    } else { // apr,jun,sep,nov --> 30 days
      age = 30-birthdate+date;
    }

    return age;
  }

  filterAge(days) { // days is an int indicating the number of days old
    let filtered = this.state.mothers.filter(kid => this.calcAge(kid.DoB) == days);

    return filtered.map((contact) => (
        <Text>{contact.MotherName}, {contact.Phone}{'\n'}</Text>
    ));
  }

  filterMessages(days) {
    let filtered = this.state.mothers.filter(kid => this.calcAge(kid.DoB) == days);
    return filtered;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Messaging Portal</Text>
        </View>
        <View>

        <ExpandableItem title="TODAY'S MESSAGES">
          {this.state.messages.filter(m => this.filterMessages(m.schedule).length > 0).map((message) => (
            <View>
              <Text>Title: {message.title}</Text>
              <Text>Message: {message.body}</Text>
              <Text>Scheduled for: {message.schedule}</Text>
              <Text>Recipients: {this.filterAge(message.schedule)}</Text>
              <Text>{'\n'}</Text>
            </View>
          ))}
        </ExpandableItem>
          
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

            <Button title="Submit" color="#682f2f" onPress={this.handleMessage} />
          </ExpandableItem>
        </View>
      
        {this.state.messages.map((message) => (
          <ExpandableItem title={message.schedule} key={message.schedule}>
            <Text>Title: {message.title}</Text>
            <Text>Message: {message.body}</Text>
            <Text>Scheduled for: {message.schedule}</Text>
            <Button
              title="Delete"
              color="red"
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
        <Button title="Delete All" color="red" onPress={this.removeAll} />
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
    backgroundColor: "#f2dac8" //peach
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
