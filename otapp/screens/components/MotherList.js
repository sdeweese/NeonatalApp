import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ExpandableItem from "./ExpandableItem";

export default MotherList = async ({ data }) => {
  const mothers = data;

  return (
    // eventually sort the names before displaying them
    <View>
        <Text style={styles.text}>Mothers</Text>
        {mothers.map((mom) => (
            <View style={styles.text}>
                    <Text>Mother Name: {mom.MotherName}</Text>
                    <Text>Child's Name: {mom.ChildName}</Text>
                    <Text>Child's Birthdate: {mom.DoB}</Text>
                    <Text>Status Born: {mom.Born}</Text>
                    <Text>Phone Number: {mom.Phone}</Text>
                    <Text>Notes: {mom.Notes}</Text>
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