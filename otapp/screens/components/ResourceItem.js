import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const ResourceItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.resource}</Text>
    </View>
  );
};

export default ResourceItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10
  }
});
