import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

class MamaSelfCare extends React.Component{
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
                        source={require('../assets/Mama1.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{  width: Dimensions.get('window').width, height: Dimensions.get('window').height-75  }}
                        resizeMode="contain"
                        source={require('../assets/Mama2.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Mama3.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Mama4.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Mama5.png')} />
                </View>

            </ScrollView>
        );
    }
}
export default MamaSelfCare;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#f2dac8" //peach
    }
});
