import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

class KeepingBabyClean extends React.Component{
    render(){
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
            >
                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Hygiene1.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{  width: Dimensions.get('window').width, height: Dimensions.get('window').height-75  }}
                        resizeMode="contain"
                        source={require('../assets/Hygiene2.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Hygiene3.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Hygiene4.png')} />
                </View>

            </ScrollView>
        );
    }
}
export default KeepingBabyClean;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
