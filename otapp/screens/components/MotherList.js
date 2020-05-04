import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ExpandableItem from "./ExpandableItem";

export default MotherList = async ({ data }) =>  {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    // eventually sort the names before displaying them

  return (
    <View>
      {result.map((mom) => (
        <ExpandableItem title={mom.MotherName}>
          <Text>Mother Name: {mom.MotherName}</Text>
          <Text>Child's Name: {mom.ChildName}</Text>
          <Text>Child's Birthdate: {mom.DoB}</Text>
          <Text>Status Born: {mom.Born}</Text>
          <Text>Phone Number: {mom.Phone}</Text>
          <Text>Notes: {mom.Notes}</Text>
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