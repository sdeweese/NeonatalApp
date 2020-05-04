import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ExpandableItem from "./ExpandableItem";

export default MessagesList = ({ data }) => {
  const messages = data; //later figure out how to sort here

  return (
    <View>
      {messages.map((message) => (
        <ExpandableItem title={message.schedule} key={message.schedule}>
          <Text>Title: {message.title}</Text>
          <Text>Message: {message.body}</Text>
          <Text>Scheduled for: {message.schedule}</Text>
          <Button
            title="Delete" /* onPress={this.props.removeMessage(message)} */
          />
        </ExpandableItem>
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
