import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  Linking,
  View,
  TextInput,
  Keyboard,
  Alert,
  Button
} from "react-native";

class AddMother extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userId: '',
            MotherName: '',
            ChildName: '',
            DoB: '',
            Born: '',
            Phone: '',
            Notes: ''
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.title}>Add Mother</Text>
                </View>
                <View>   
                    <Text style={styles.top}>Mother's Name:</Text>
                    <TextInput style={styles.input}
                        onChangeText = {userId => this.setState({userId})} />    
                    
                    <Text style={styles.top}>Child's Name:</Text>
                    <TextInput style={styles.input}
                        onChangeText = {ChildName => this.setState({ChildName})} />                   

                    <Text style={styles.top}>Date of Birth:</Text>
                    <TextInput style={styles.input}
                        onChangeText = {DoB => this.setState({DoB})} />                   


                    <Text style={styles.top}>Child is Born:</Text>
                    <TextInput style={styles.input}
                        onChangeText = {Born => this.setState({Born})} />                   

                    <Text style={styles.top}>Phone Number:</Text>
                    <TextInput style={styles.input}
                        onChangeText = {Phone => this.setState({Phone})} />                   

                    <Text style={styles.top}>Notes:</Text>
                    <TextInput style={styles.input}
                        onChangeText = {Notes => this.setState({Notes})} />                   
                    
                    <Button style={styles.btn}
                        title="Submit"
                        onPress={() => this.props.navigation.navigate("Database")}
                    />
                </View>

                
            </ScrollView>
        );
    }
    
}

    const userId = 'Trial mom data';
    const saveUserId = async userId => {
    try {
        await AsyncStorage.setItem('userId', userId);
        console.log(userId + " Saved Successfully");
    } catch (error) {
        console.log("Data not saved properly");
    }
    };

    /*saveUserId =()=>{
        const {MotherName, ChildName, DoB, Born, Phone, Notes} = this.state;
        Keyboard.dismiss();
        let myArray={
            MotherName=MotherName,
            ChildName=ChildName,
            DoB=DoB, 
            Born=Born, 
            Phone=Phone, 
            Notes=Notes
        }
        AsyncStorage.setItem('myArray', JSON.stringify(myArray));
        alert(MotherName + ' ' + ChildName + ' ' + DoB + ' ' + Born + ' ' + Phone + ' ' + Notes);
 
   }
      */
export default AddMother;

const styles = StyleSheet.create({
    top: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-evenly",
      margin: 15, 
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
    },
    btn: {
        width: 50,
        textAlign: 'center',
        margin: 15
    }
  });