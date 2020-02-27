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
                             
                <Button
                    title="Keeping Baby Clean and Healthy"
                    onPress={() => this.props.navigation.navigate("Home")}
                />

                <Button
                    title="When Baby Gets Sick"
                    onPress={() => this.props.navigation.navigate("Home")}
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
        justifyContent:'space-evenly'
    }
});