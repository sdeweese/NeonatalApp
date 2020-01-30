import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ModulesPage extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Button
                    title="First Module"
                    onPress={() => this.props.navigation.navigate("Module1")}
                />
                <Button
                    title="Test Module1b"
                    onPress={() => this.props.navigation.navigate("Module1b")}
                />
                <Text>Second Module</Text>
                <Text>Third Module</Text>
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