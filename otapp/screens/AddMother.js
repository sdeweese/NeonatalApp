import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  Linking,
  View,
  Button
} from "react-native";

class AddMother extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.title}>Add Mother</Text>
                </View>
            </ScrollView>
        );
    }
    
}
export default AddMother;

    const userId = 'Trial mom data';
    const saveUserId = async userId => {
    try {
        await AsyncStorage.setItem('userId', userId);
    } catch (error) {
        console.log(error.message);
    }
    };

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