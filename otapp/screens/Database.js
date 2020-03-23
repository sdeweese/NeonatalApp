import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  Linking,
  View,
  AsyncStorage,
  Button
} from "react-native";
import ExpandableItem from "./components/ExpandableItem";
import { useRoute } from '@react-navigation/native';


{/* const { MotherName } = route.params; */}

class Database extends React.Component {
    constructor(props){
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

    retrieveMotherName = async () => {
        try {
          const value = await AsyncStorage.getItem('MotherName');
          if (value !== null) {
            console.log(value);
          }
        } catch (error) {
          console.log("Data not found");
        }
    }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Mothers</Text>
          <Button
            title="+"
            onPress={() => this.props.navigation.navigate("AddMother")}
          ></Button>
        </View>
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
        <ExpandableItem title="New Mother">
          <Text style={styles.expand}>
            
          {/* {AsyncStorage.getItem(MotherName)}
          {this.props.navigation.state.params.MotherName} */}
           
          </Text>
          
        </ExpandableItem>
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
  }
});
