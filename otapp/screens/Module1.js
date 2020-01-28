import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Module1 extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>image</Text>
            </View>
        );
    }
}
export default Module1;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});