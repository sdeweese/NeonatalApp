import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ModulesPage extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Button
                    title="Lactation"
                    onPress={() => this.props.navigation.navigate("Lactation")}
                />
                <Text>Common Sicknesses</Text>
                <Text>Hygiene</Text>
                <Text>Postpartum Expectations</Text>
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