import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ModulesPage extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>ModulesPage</Text>
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