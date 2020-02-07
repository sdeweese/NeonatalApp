import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

class Module1b extends React.Component{
    render(){
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
            >
                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                        resizeMode="contain"
                        source={require('../assets/img2.jpg')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                        //resizeMode="contain"
                        source={require('../assets/img1.jpg')} />
                </View>

            </ScrollView>
        );
    }
}
export default Module1b;

const styles = StyleSheet.create({
    container:{
        flex:1,
        //width: Dimensions.get('window').width,
        alignItems:'center',
        justifyContent:'center'
    }
});