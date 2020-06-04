import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  TextInput,
  AsyncStorage,
} from "react-native";
import ExpandableItem from "./components/ExpandableItem";
import DatePicker from "react-native-datepicker";
import * as FileSystem from "expo-file-system";
import DocumentPicker from 'react-native-document-picker';

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
    this.removeMother = this.removeMother.bind(this);
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
      return mothers;
    } catch (error) {
      console.log(error, "Not found");
    }
  }

  async updateMother(newMother) {
    try {
      let mothers = await this.getMothers(); // []
      console.log(newMother);
      mothers.push(newMother);
      this.saveMothers(mothers);
      this.setState({ mothers });
    } catch (error) {
      console.log("Error fetching mothers", error);
    }
  }

  async removeMother(removeMother) {
    try {
      let old = this.getMothers(); // object version
      // find the mother to remove in mothers []
      old.forEach((mom) => {
        if (
          mom.Phone === removeMother.Phone &&
          mom.MotherName === removeMother.MotherName
        )
          newMothers = old.slice(0, mom); // look into using slice to create a sub array with 1 missing elt
      });

      this.saveMothers(newMothers); // store the temp as into AsyncStorage to overwrite the current mothers array stored in AsyncStorage
      this.setState({ newMothers });
    } catch (error) {
      console.log(error + ": error removing data");
    }
  }

  handleMother = () => {
    /*alert("Mother Name: " + this.state.MotherName + "\n" +
                "Child's Name: " + this.state.ChildName + "\n" +
                "Child's Birthdate: " + this.state.DoB + "\n" +
                "Status Born: " + this.state.Born + "\n" + 
                "Phone Number: " + this.state.Phone + "\n" +
                "Notes: " + this.state.Notes
                );
                */
    if (
      this.state.MotherName !== "" &&
      this.state.ChildName !== "" &&
      this.state.DoB !== "" &&
      this.state.Born !== "" &&
      this.state.Phone !== "" &&
      this.state.Notes !== ""
    ) {
      this.updateMother({
        // this is a mother object
        MotherName: this.state.MotherName,
        ChildName: this.state.ChildName,
        DoB: new Date(this.state.DoB),
        Born: this.state.Born,
        Phone: this.state.Phone,
        Notes: this.state.Notes,
      });
    } else {
      alert("Fields cannot be blank.");
    }
  };

  
  createBackup = async () => {
    try {
      // get mothers
      let mothers = await this.getMothers();  
      console.log(mothers);
      let data = JSON.stringify(mothers);
      console.log(data);
      // determine file uri
      let myFolder = FileSystem.documentDirectory;
      //console.log(myFolder);
      var month = new Date().getMonth() + 1; //To get the Current Month
      var date = new Date().getDate(); //To get the Current Date
      let fileName = 'backup-' + month + '-' + date + '.json';
      console.log(fileName);
      let fileUri = myFolder + fileName;
      console.log(fileUri);
      // write file
      FileSystem.writeAsStringAsync(fileUri, data);
      //let result = FileSystem.readAsStringAsync(fileUri);
      //console.log(result);
    } catch (error) {
      console.log(error + ": error creating backup");
    }
  } 

  async uploadBackup() { 
    alert("upload file");
    try {
      let update =  await DocumentPicker.pick({ type: [DocumentPicker.types.allFiles] });
      saveMothers(update);
      console.log(
        update.uri,
        update.type,
        update.name,
        update.size
      );
    } catch (error) {
      console.log(error + ": error uploading backup");
    }  
  };

  removeMother = async (removeMother) =>  {
    try {
      let newMothers = await this.getMothers(); // object version
      newMothers = newMothers.filter((val, index, arr) => val !== removeMother);
      this.saveMothers(newMothers); // store the temp as into AsyncStorage to overwrite the current mothers array stored in AsyncStorage
      this.setState({ newMothers });
    } catch (error) {
      console.log(error + ": error removing data");
    }
  };

  removeAll = async () => {
    try {
      let huh = await AsyncStorage.removeItem(STORAGE_KEY);
      console.log(huh);
      this.setState({ mothers: [] });
    } catch (error) {
      console.log(error + ": Remove all messages failed.");
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Mother Portal</Text>
        </View>
        <View>
        <Button
            title="Backup"
            color="#682f2f" //maroon
            onPress={this.createBackup}
        />
         
        <Button
          title="Upload File"
          color="#682f2f" //maroon
          onPress={this.uploadBackup} 
        />

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
            <DatePicker
              date={this.state.DoB}
              mode="date"
              formate="YYYY-MM-DD"
              placeholder="select birthdate"
              onDateChange={(date) => this.setState({ DoB: date })}
            />

            <Text>Status Born (Y/N):</Text>
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
              color="#682f2f"
              onPress={this.handleMother}/>

        </ExpandableItem>
        
        {this.state.mothers.map((mom) => (
          <ExpandableItem title={mom.MotherName} key={mom.MotherName}> 
            <Text>Mother Name: {mom.MotherName}</Text>
            <Text>Child's Name: {mom.ChildName}</Text>
            <Text>Child's Birthdate: {mom.DoB}</Text>
            <Text>Status Born: {mom.Born}</Text>
            <Text>Phone Number: {mom.Phone}</Text>
            <Text>Notes: {mom.Notes}</Text>
            <Button
              title="Delete"
              color="red"
              onPress={async () => {
                try {
                  let mothers = await this.getMothers();
                  mothers = mothers.filter((val) => {
                    return val.MotherName !== mom.MotherName;
                  });
                  this.saveMothers(mothers);
                  this.setState({ mothers });
                } catch (error) {
                  console.log(error + ": error removing data");
                }
              }}
            />
          </ExpandableItem>
          ))}
          <Button title="Delete All" color="red" onPress={this.removeAll} />
        </View>
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
    backgroundColor: "#f2dac8", //peach
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
