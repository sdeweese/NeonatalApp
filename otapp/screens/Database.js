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
  Button,
} from "react-native";
import ExpandableItem from "./components/ExpandableItem";
import MotherList from "./components/MotherList";

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
    };
  }

  setNewMother = async (key, value) => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(value));
      console.log("Key: " + key + " Saved Successfully");
    } catch (error) {
      console.log("Mother not saved properly");
    }
<<<<<<< HEAD
    
    readNewMother = () => {
        this.getNewMother("41 902 2938").then( result => {
            let parsed = JSON.parse(result);
            alert("Mother Name: " + parsed.MotherName + "\n" +
                "Child's Name: " + parsed.ChildName + "\n" +
                "Child's Birthdate: " + parsed.DoB + "\n" +
                "Status Born: " + parsed.Born + "\n" + 
                "Phone Number: " + parsed.Phone + "\n" +
                "Notes: " + parsed.Notes
                )
        })
=======
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
>>>>>>> Emily
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
      MotherName: "Mamma Name",
      ChildName: "Dembe",
      DoB: "February 29th, 2020",
      Born: "Yes",
      Phone: "41 902 2938",
      Notes: "Tukesiga is planning to come back on April 20th",
    });
  };

  readNewMother = () => {
    this.getNewMother("41 902 2938").then((result) => {
      let parsed = JSON.parse(result);
      alert(
        "Mother Name: " +
          parsed.MotherName +
          "\n" +
          "Child's Name: " +
          parsed.ChildName +
          "\n" +
          "Child's Birthdate: " +
          parsed.DoB +
          "\n" +
          "Status Born:" +
          parsed.Born +
          "\n" +
          "Phone Number: " +
          parsed.Phone +
          "\n" +
          "Notes: " +
          parsed.Notes
      );
    });
  };

  deleteMother = () => {
    this.removeMother("41 902 2938");
  };

  
    /* renderMothers = async () => {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      try {
      
        //console.log(result); // array of arrays 
        //console.log(JSON.parse(result[0][1])); // all the info about the first mother in the array of arrays
        //console.log(JSON.parse(result[0][1]).MotherName); // the name of the first mother in the array of arrays
        
        //alert(JSON.parse(result[0][1]).MotherName); // returns first mother in database

        return ( result.map(mom => { // mom is every array (within the larger array)
            <Text>{JSON.stringify(JSON.parse(mom[1]).ChildName)}</Text>
            //alert(mom[0]);
            //alert(child);
            //return child;
        }
        )
        )
        
 
        
        // sort array by mother names
        //var sortedmoms = _.sortBy( moms, 'MotherName' ); 
        //console.log('++++++++++++++++++++++++++++++++++++++++++++ SORTED?????????? \n' + sortedmoms);
        

        // create an expandable item for each mom -- currently the code below does not display on the page, as intended
    
 
          
 
      } catch(error) {
          console.log(error);
      }
    }

  */

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Mothers</Text>
        </View>
        <ExpandableItem title="Add a New Mother">
            <Text>Mother's Name:</Text>
            <TextInput style={styles.input}
                onChangeText = {MotherName => this.setState({MotherName: MotherName})} 
                value={this.state.MotherName} />

            <Text>Child's Name:</Text>
            <TextInput style={styles.input}
                onChangeText = {ChildName => this.setState({ChildName: ChildName})} 
                value={this.state.ChildName}/>                   

            <Text>Date of Birth:</Text>
            <TextInput style={styles.input}
                onChangeText = {DoB => this.setState({DoB: DoB})} 
                value={this.state.DoB}/>                   

            <Text>Child is Born:</Text>
            <TextInput style={styles.input}
                onChangeText = {Born => this.setState({Born: Born})} 
                value={this.state.Born}/>                   

            <Text>Phone Number:</Text>
            <TextInput style={styles.input}
                onChangeText = {Phone => this.setState({Phone: Phone})} 
                value={this.state.Phone}/>                   

            <Text>Notes:</Text>
            <TextInput style={styles.input}
                onChangeText = {Notes => this.setState({Notes: Notes})} 
                value={this.state.Notes}/>                   
            <Text>{"\n"}</Text>
            <Button style={styles.btn}
                title="Submit"
                onPress={() => {
                  if(this.state.MotherName != '' && this.state.ChildName != '' && this.state.DoB != '' && this.state.Born != '' && this.state.Phone != '' && this.state.Notes != ''){
                  this.setNewMother(this.state.Phone, 
                    { MotherName: this.state.MotherName, ChildName: this.state.ChildName, DoB: this.state.DoB, 
                        Born: this.state.Born, Phone: this.state.Phone, Notes: this.state.Notes
                    }
                    );
                    this.setState({
                      Phone: '', 
                      MotherName: '', 
                      ChildName: '', 
                      DoB: '', 
                      Born: '', 
                      Phone: '', 
                      Notes: ''
                      });
                    alert(this.state.MotherName + ' saved!');
                } else {
                  alert('Please fill out all fields. ' + this.state.MotherName + ' was not saved.');
                }
              }}
            />            
          
        </ExpandableItem>
      
        <ExpandableItem title="Natukunda">  
          <Text style={styles.expand}>
            Child's Name: Balondemu {"\n"}
            Date of Birth: March 24th, 2020 {"\n"}
            Born: Yes {"\n"}
            Phone Number: 41 589 4931 {"\n"}
            Notes:
          </Text>
        </ExpandableItem>
        <ExpandableItem title="Tukesiga">
          <Text style={styles.expand}>
            Child's Name: Dembe {"\n"}
            Date of Birth: February 29th, 2020 {"\n"}
            Born: Yes {"\n"}
            Phone Number: 41 902 2938 {"\n"}
            Notes: Tukesiga is planning to come back on March 20th
          </Text>
        </ExpandableItem>
        
        {/* <Text>{this.renderMothers()}</Text> 
      
        <TouchableOpacity onPress={this.renderMothers}>
          <Text style={styles.expand}>Render Mothers</Text>
        </TouchableOpacity>
*/} 

        <MotherList/> 


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
    borderWidth: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    width: 500,
    padding: 5,
    borderRadius: 4,
  },
});
