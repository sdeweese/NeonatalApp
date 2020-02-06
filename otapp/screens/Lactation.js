import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

class Lactation extends React.Component{
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
                        source={require('../assets/Slide1.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                        resizeMode="contain"
                        source={require('../assets/slide2.png')} />
                </View>

            </ScrollView>
        );
    }
}
export default Lactation;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});