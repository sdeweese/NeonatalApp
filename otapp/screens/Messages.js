import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  Linking,
  View,
  Button
} from "react-native";
import ExpandableItem from "./components/ExpandableItem";

class Messages extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Messages</Text>
          <Button
            title="+"
            onPress={() => this.props.navigation.navigate("Messages")}
          ></Button>
        </View>
        <ExpandableItem title="2 Days">
          <Text style={styles.expand}>
            Remember to vaccinate your child against Polio and TB right after
            birth.
          </Text>
        </ExpandableItem>
        <ExpandableItem title="10 Days">
          <Text style={styles.expand}>
            After a week, baby’s umbilical cord should fall off naturally.
          </Text>
        </ExpandableItem>
      </ScrollView>
    );
  }
}

export default Messages;

const styles = StyleSheet.create({
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
  container: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    paddingTop: 15,
    paddingBottom: 10
  },
  expand: {
    margin: 10
  }
});
