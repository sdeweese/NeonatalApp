import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ModulesPage extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Button
                    title="Feeding Your Baby"
                    onPress={() => this.props.navigation.navigate("FeedingYourBaby")}
                />
                <Text>Keeping Baby Clean and Healthy</Text>
                <Text>When Baby Gets Sick</Text>
                <Button
                    title="Test Module"
                    onPress={() => this.props.navigation.navigate("Module1b")}
                />
            </View>
        );
    }
}
export default ModulesPage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});