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
      old.forEach(mom => {
        if(mom.Phone === removeMother.Phone && mom.MotherName === removeMother.MotherName) 
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

  removeMother = async (removeMother) =>  {
    try {
      let newMothers = await this.getMothers(); // object version
      newMothers = newMothers.filter((val, index, arr) => val !== removeMother);
      this.saveMothers(newMothers); // store the temp as into AsyncStorage to overwrite the current mothers array stored in AsyncStorage
      this.setState({ newMothers });
    } catch (error) {
      console.log(error + ": error removing data");
    }
  }

  removeAll = async () => {
    try {
      let huh = await AsyncStorage.removeItem(STORAGE_KEY);
      console.log(huh);
      this.setState({ mothers: [] });
    } catch (error) {
      console.log(error + ": Remove all messages failed.");
    }
  };

  calcAge(DoB) {  // need DoB (string)
    // let's assume birth dates are entered as MM-DD-YYYY or M-D-YYYY etc. (can be separated by .,/- or space)
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
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
        <Button title="calculate age" onPress={() => alert(`${this.calcAge("5/10/20")} days old`)}/>
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
  mother: {
    height: 300,
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 15,
  },
});
