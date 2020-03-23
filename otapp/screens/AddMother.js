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
  AsyncStorage,
  Button
} from "react-native";

// import { useRoute } from '@react-navigation/native';


class AddMother extends React.Component {
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

    /*const userId = 'This data will not change';*/
    saveMotherName = async MotherName => {
        try {
            await AsyncStorage.setItem('MotherName', MotherName);
            console.log(MotherName + " Saved Successfully");
        } catch (error) {
            console.log("Data not saved properly");
        }
    };

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
                    <Text style={styles.title}>Add Mother</Text>
                </View>
                <View>   
                    <Text style={styles.top}>Mother's Name:</Text>
                    <TextInput style={styles.input}
                        onChangeText={this.saveMotherName}
                    />
                        {/*   Note: this is only good for changing the STATE of a variable
                        onChangeText={MotherName => this.setState({MotherName})}   */} 

                    {/*
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
                    */}

                    <Button style={styles.btn}
                        title="Submit"
                        onPress={() => this.props.navigation.navigate("Database")}
                        
                    /> 
                    
                    {/* 
                    onPress={() => alert(this.state.MotherName)}
                    onPress={() => this.props.navigation.navigate("Database", route)}
                    
                    {MotherName: MotherName}
                    
                    */} 

                </View> 

                
            </ScrollView>
        );
    }
    
}


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