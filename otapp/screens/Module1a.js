import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swipe-image';

class Module1a extends React.Component{

    state = {
        images : [
            { url: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name:"shakira" },
            { url: 'https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg', name: "cat" },
            { url: 'https://i.pinimg.com/236x/c6/6b/11/c66b111bf4df809e87a1208f75d2788b.jpg', name: "baby" }, 
            { url: './module-images/image1.jpg', name: "STORY AND SAM" }
            //{ uri: require('./module-images/image2.jpeg') }
        ]
    }
    bottom(e) {
    }

    top(e) {
    }

    render(){
        return (
            <View style={styles.container}>
                <Swiper
                    images={this.state.images}
                    imageHeight={300}
                    imageWidth={300}
                    swipeBottom={(e) => this.bottom(e)}
                    swipeTop={(e) => this.top(e)}
                    textSize={20}
                    textColor={String}
                />
            </View>

        );
    }
}
export default Module1a;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});