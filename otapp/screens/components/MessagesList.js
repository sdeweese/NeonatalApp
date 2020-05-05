import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpandableItem from "./ExpandableItem";


export default MessagesList = ({ data }) => {
  const messages = data; //later figure out how to sort here

  return (
    <View>
      <Text style={styles.text}>Messages</Text>
      {messages.map((message) => (
        <View style={styles.text}>
            <Text>Title: {message.title}</Text>
            <Text>Message: {message.body}</Text>
            <Text>Scheduled for: {message.schedule}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    alignItems: "center",
  },
});
