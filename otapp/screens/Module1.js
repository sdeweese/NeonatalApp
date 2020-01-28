import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swipe-image';

class Module1 extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Image
                    style={{width: 300, height: 300}}
                    /*source={{uri:'https://vignette.wikia.nocookie.net/google/images/a/a7/Unnamed_%282%29-0.png/revision/latest?cb=20180312195233'}}*/
                    source={require('./module-images/image1.jpg')}
                />
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