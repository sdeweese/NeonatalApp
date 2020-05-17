import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ModulesPage extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Button
                    title="Feeding Your Baby"
                    color="#955d74" //dark pink
                    onPress={() => this.props.navigation.navigate("FeedingYourBaby")}
                />
                             
                <Button
                    title="Keeping Baby Clean and Healthy"
                    color="#955d74" //dark pink
                    onPress={() => this.props.navigation.navigate("KeepingBabyClean")}
                />

                <Button
                    title="When Baby Gets Sick"
                    color="#955d74" //dark pink
                    onPress={() => this.props.navigation.navigate("WhenBabyGetsSick")}
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
        justifyContent:'space-evenly',
        flexDirection: "row",
        backgroundColor: "#f2dac8"
    }
});