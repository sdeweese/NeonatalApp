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


{/* const { MotherName } = route.params; */}

class Database extends React.Component {

    saveMotherName() {
        let newMother = {
            MotherName: 'ME',
            ChildName: 'Dembe',
            DoB: 'February 29th, 2020',
            PhoneNumber: '41 902 2938',
            Notes: 'Tukesiga is planning to come back on March 20th',
        }
        try {
            AsyncStorage.setItem('id', JSON.stringify(newMother));
            console.log(JSON.stringify(newMother) + " Saved Successfully");
        } catch (error) {
            console.log("MotherName not saved properly");
        }
    };

    retrieveNewMother = async () => {
        //alert(JSON.stringify(id));
        try {
          let id = await AsyncStorage.getItem('id');
          if (id !== null) {
            console.log(id + " Returned Successfully");
            //alert(JSON.stringify(id)); // shows all data for that user
            let parsed = JSON.parse(id);
            //alert(parsed.MotherName);
          }
        } catch (error) {
          console.log(error + " id not found");
        }
    }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Mothers</Text>
          {/* <Button
            title="+"
            onPress={() => this.props.navigation.navigate("AddMother")}
          ></Button> */}
        </View>
        <ExpandableItem title="Add a New Mother">
            <Text>Mother's Name:</Text>
            <TextInput style={styles.input}
                onChangeText={this.saveMotherName}/>
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
        <TouchableOpacity onPress={this.retrieveNewMother}>
          <Text style={styles.expand}>New Mamma</Text>
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
