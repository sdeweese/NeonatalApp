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
  AsyncStorage,
  Button
} from "react-native";
import ExpandableItem from "./components/ExpandableItem";

class Database extends React.Component {

    setNewMother = async (key, value) => {
        try {
            AsyncStorage.setItem(key, value);
            console.log("Key: " + key + " value: " + value + " Saved Successfully");
        } catch (error) {
            console.log("MotherName not saved properly");
        }
    };
    
    getNewMother = async (key) => {
        //alert(JSON.stringify(id));
        try {
          let value = await AsyncStorage.getItem(key);
          if (value !== null) {
            console.log(value + " Returned Successfully");
            alert(JSON.stringify(value)); // shows all data for that user
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
        this.setNewMother("Sam", "Sam's data")
    }
    
    readNewMother = () => {
        this.getNewMother("Sam").then( result => {
            alert("value: " + result)
        })
    }

    deleteMother = () => {
        this.removeMother("Sam")
    }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Mothers</Text>
        </View>
        <ExpandableItem title="Add a New Mother">
            <Text>Mother's Name:</Text>
            <TextInput style={styles.input}
                onChangeText={this.saveNewMother}/>
                {/*onChangeText = {MotherName => this.setState({MotherName})}   */}  
            
            <Text>Child's Name:</Text>
            <TextInput style={styles.input}
                onChangeText = {ChildName => this.setState({ChildName})} />                   

            <Text>Date of Birth:</Text>
            <TextInput style={styles.input}
                onChangeText = {DoB => this.setState({DoB})} />                   

            <Text>Child is Born:</Text>
            <TextInput style={styles.input}
                onChangeText = {Born => this.setState({Born})} />                   

            <Text>Phone Number:</Text>
            <TextInput style={styles.input}
                onChangeText = {Phone => this.setState({Phone})} />                   

            <Text>Notes:</Text>
            <TextInput style={styles.input}
                onChangeText = {Notes => this.setState({Notes})} />                   
            <Text>{"\n"}</Text>
            <Button style={styles.btn}
                title="Submit"
                onPress={() => this.props.navigation.navigate("Database")}
            />            
          {/* {AsyncStorage.getItem(MotherName)}
          {this.props.navigation.state.params.MotherName} */}
        </ExpandableItem>
        <ExpandableItem title="Natukunda">  
          <Text style={styles.expand}>
            Child's Name: Balondemu {'\n'}
            Date of Birth: March 24th, 2020 {'\n'}
            Phone Number: 41 589 4931 {'\n'}
            Notes: 
          </Text>
        </ExpandableItem>
        <ExpandableItem title="Tukesiga">
          <Text style={styles.expand}>
            Child's Name: Dembe {'\n'}
            Date of Birth: February 29th, 2020 {'\n'}
            Phone Number: 41 902 2938 {'\n'}
            Notes: Tukesiga is planning to come back on March 20th
          </Text>
        </ExpandableItem>
        <TouchableOpacity onPress={this.saveNewMother}>
          <Text style={styles.expand}>Set</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.readNewMother}>
          <Text style={styles.expand}>Read</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.deleteMother}>
          <Text style={styles.expand}>Remove</Text>
        </TouchableOpacity>
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
    color: "black",
    flexDirection: "row"
  },
  container: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    paddingTop: 15,
    paddingBottom: 10
  },
  expand: {
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
});
