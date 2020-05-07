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
import MotherList from "./components/MotherList";

const STORAGE_KEY = "MOTHERS";

class Database extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MotherName: "",
      ChildName: "",
      DoB: "",
      Born: "",
      Phone: "",
      Notes: "",
      mothers: [], // list of ALL the mothers
    };
  }

  componentDidMount() {
    let m = this.getMothers();
    this.setState({ m });
  }

  async saveMothers(mothers) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mothers));
    } catch (error) {
      console.log(error, "Not saved properly");
    }
  }

  async getMothers() {
    try {
      let mothers = await AsyncStorage.getItem(STORAGE_KEY);
      if (mothers !== null) {
        return JSON.parse(mothers);
      } else {
        return [];
      }
    } catch (error) {
      console.log(error, "Not found");
    }
  }

  async updateMother(newMother) {
    try {
      let mothers = await this.getMothers();
      console.log(newMother);
      mothers.push(newMother);
      this.saveMothers(mothers);
      this.setState({ mothers });
    } catch (error) {
      console.log("Error fetching mothers", error);
    }
  }

  async removeMother() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.log(error + ": error removing data");
    }
  }

  handleMother = () => {
    if(this.state.MotherName && this.state.ChildName && this.state.DoB && this.state.Born && this.state.Phone && this.state.Notes){
      this.updateMother({
        MotherName: this.state.MotherName,
        ChildName: this.state.ChildName,
        DoB: this.state.DoB,
        Born: this.state.Born,
        Phone: this.state.Phone,
        Notes: this.state.Notes,
      });
    } else {
      alert("Fields cannot be blank.");
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Mother Portal</Text>
        </View>
        <View>
          <Text>NEW MOTHER</Text>
          <Text>Mother Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ MotherName: text })}
          />

          <Text>Child's Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ ChildName: text })}
          />

          <Text>Child's Birthdate:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ DoB: text })}
          />

          <Text>Status Born:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ Born: text })}
          />

          <Text>Phone Number:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ Number: text })}
          />
          
          <Text>Notes:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ Notes: text })}
          />

          <Button
            title="Submit"
            onPress={this.handleMother}/>
        </View>

        <MotherList data={this.state.mothers} />

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
  mother: {
    height: 300,
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 15,
  },
});
