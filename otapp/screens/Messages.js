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
<<<<<<< HEAD
  AsyncStorage,
  Button
=======
  Button,
  TextInput,
  AsyncStorage,
>>>>>>> c5225bc9b88940ba3191c51f9bd3e16fb7ccbe2a
} from "react-native";
import ExpandableItem from "./components/ExpandableItem";
import MessagesList from "./components/MessagesList";

const STORAGE_KEY = "MESSAGES";

<<<<<<< HEAD
class Database extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            MotherName: '',
            ChildName: '',
            DoB: '',
            Born: '',
            Phone: '',
            Notes: ''
        }
     }

    setNewMother = async (key, value) => {
        try {
            AsyncStorage.setItem(key, JSON.stringify(value));
            console.log("Key: " + key + " Saved Successfully");
        } catch (error) {
            console.log("Mother not saved properly");
        }
    };
    
    getNewMother = async (key) => {
        //alert(JSON.stringify(id));
        try {
          let value = await AsyncStorage.getItem(key);
          if (value !== null) {
            console.log(value + " Returned Successfully");
            //alert(JSON.stringify(value)); // shows all data for that user
            //let parsed = JSON.parse(id);
            //alert(parsed.MotherName);
            return value;
          } else {
            console.log("Sorry, key not found");
          }
        } catch (error) {
          console.log(error + " id not found");
        }
    };

    removeMother = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error + ": error removing data");
        }
    };

    saveNewMother = () => {
        this.setNewMother("41 902 2938", {
            MotherName: 'Mamma Name',
            ChildName: 'Dembe',
            DoB: 'February 29th, 2020',
            Born: 'Yes',
            Phone: '41 902 2938',
            Notes: 'Tukesiga is planning to come back on April 20th'
        })
    }
    
    readNewMother = () => {
        this.getNewMother("8383").then( result => {
            let parsed = JSON.parse(result);
            alert("Mother Name: " + parsed.MotherName + "\n" +
                "Child's Name: " + parsed.ChildName + "\n" +
                "Child's Birthdate: " + parsed.DoB + "\n" +
                "Status Born:" + parsed.Born + "\n" + 
                "Phone Number: " + parsed.Phone + "\n" +
                "Notes: " + parsed.Notes
                )
        })
    }

    deleteMother = () => {
        this.removeMother("41 902 2938")
    }
=======
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
>>>>>>> c5225bc9b88940ba3191c51f9bd3e16fb7ccbe2a

  render() {
    const { input } = this.state
    return (
        
      <ScrollView style={styles.container}>
        <View style={styles.top}>
<<<<<<< HEAD
          <Text style={styles.title}>Mothers</Text>
=======
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
>>>>>>> c5225bc9b88940ba3191c51f9bd3e16fb7ccbe2a
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
<<<<<<< HEAD
        <TouchableOpacity onPress={this.saveNewMother}>
          <Text style={styles.expand}>Set</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.readNewMother}>
          <Text style={styles.expand}>Read</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.deleteMother}>
          <Text style={styles.expand}>Remove</Text>
        </TouchableOpacity>
=======
        <MessagesList data={this.state.messages} />
        <Button title="Delete All" onPress={this.removeAll} />
>>>>>>> c5225bc9b88940ba3191c51f9bd3e16fb7ccbe2a
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
<<<<<<< HEAD
    color: "black",
    flexDirection: "row"
=======
    flexDirection: "row",
>>>>>>> c5225bc9b88940ba3191c51f9bd3e16fb7ccbe2a
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
<<<<<<< HEAD
    margin: 10
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    width: 500,
    padding: 5,
    borderRadius: 4
  }
=======
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
>>>>>>> c5225bc9b88940ba3191c51f9bd3e16fb7ccbe2a
});
