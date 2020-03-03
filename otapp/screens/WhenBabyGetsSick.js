import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

class WhenBabyGetsSick extends React.Component{
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
                        source={require('../assets/Sick1.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{  width: Dimensions.get('window').width, height: Dimensions.get('window').height-75  }}
                        resizeMode="contain"
                        source={require('../assets/Sick2.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Sick3.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Sick4.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Sick5.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Sick6.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Sick7.png')} />
                </View>

            </ScrollView>
        );
    }
}
export default WhenBabyGetsSick;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
