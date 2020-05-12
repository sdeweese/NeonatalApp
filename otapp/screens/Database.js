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
    this.getMothers();
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
        mothers = JSON.parse(mothers);
      } else {
        mothers = [];
      }
      this.setState({ mothers });
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

 /*async removeMother(removeMother) {
    try {
      let old = this.getMothers(); // object version
      // find the mother to remove in mothers [] 
      old.forEach(mom => {
        if(mom.Phone === removeMother.Phone && mom.MotherName === removeMother.MotherName) 
          let newMothers = old.slice(0, removeMother); // look into using slice to create a sub array with 1 missing elt
      });
      
      this.saveMothers(newMothers); // store the temp as into AsyncStorage to overwrite the current mothers array stored in AsyncStorage
      this.setState({ newMothers });

    } catch (error) {
      console.log(error + ": error removing data");
    }
  }
*/
  handleMother = () => {
    /*alert("Mother Name: " + this.state.MotherName + "\n" +
                "Child's Name: " + this.state.ChildName + "\n" +
                "Child's Birthdate: " + this.state.DoB + "\n" +
                "Status Born: " + this.state.Born + "\n" + 
                "Phone Number: " + this.state.Phone + "\n" +
                "Notes: " + this.state.Notes
                );
                */
    if(this.state.MotherName !== '' && this.state.ChildName !== '' && this.state.DoB !== '' && this.state.Born !== '' && this.state.Phone !== '' && this.state.Notes !== ''){
      this.updateMother({ // this is a mother object
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
      
          <ExpandableItem title="NEW MOTHER">
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
              onChangeText={(text) => this.setState({ Phone: text })}
            />
            
            <Text>Notes:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({ Notes: text })}
            />

            <Button
              title="Submit"
              onPress={this.handleMother}/>

        </ExpandableItem>
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
