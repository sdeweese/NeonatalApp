import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const ResourceItem = props => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{props.resource}</Text>
    </View>
  );
};

export default ResourceItem;

const styles = StyleSheet.create({
  listItem: {
    paddingLeft: 12,
    marginVertical: 14,
    borderRadius: 4,
    borderStyle: "dotted",
    borderWidth: 2.5,
    borderColor: 'green'
  },
  text: {
    fontSize: 20
  }
});
