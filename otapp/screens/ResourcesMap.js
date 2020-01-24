import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import ResourceItem from "./components/ResourceItem";

class ResourcesMap extends React.Component {
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Resources</Text>
        <ResourceItem resource="BUBIRO HEALTH CENTRE 2" />
        <ResourceItem resource="BUGUNGU HEALTH CENTRE 2" />
        <ResourceItem resource="BUSABAGA HEALTH CENTRE 3" />
        <ResourceItem resource="BUWAGAJJO HEALTH CENTRE 3" />
        <ResourceItem resource="DUNGI HEALTH CENTRE 2" />
        <ResourceItem resource="HEALTH INITIATIVE OF AFRICA -UGANDA HEALTH CENTRE 3" />
        <ResourceItem resource="KABIZZI HEALTH CENTRE 2" />
        <ResourceItem resource="KALAGALA HEALTH CENTRE 2" />
        <ResourceItem resource="KASUBI HEALTH CENTRE 3" />
        <ResourceItem resource="KIWAYI HEALTH CENTRE 2" />
        <ResourceItem resource="KIZIGO HEALTH CENTRE 2" />
        <ResourceItem resource="KKONKO HEALTH CENTRE 2" />
        <ResourceItem resource="LUGAZI HEALTH CENTRE 2" />
        <ResourceItem resource="MAKINDU HEALTH CENTRE 2" />
        <ResourceItem resource="NAJJEMBE HEALTH CENTRE 2" />
        <ResourceItem resource="NAMINYA HEALTH CENTRE 2" />
        <ResourceItem resource="NAMULESA HEALTH CENTRE 2" />
        <ResourceItem resource="NGOGWE HEALTH CENTRE 3" />
        <ResourceItem resource="NJERU T/C HEALTH CENTRE 3" />
        <ResourceItem resource="NKOKONJERU GOVERNMENT HEALTH CENTRE 2" />
        <ResourceItem resource="SSENYI HEALTH CENTRE 2" />
        <ResourceItem resource="SSI HEALTH CENTRE 3" />
        <ResourceItem resource="TONGOLO HEALTH CENTRE 2" />
        <ResourceItem resource="WAKISI HEALTH CENTRE 3" />
      </ScrollView>
    );
  }
}
export default ResourcesMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    paddingTop: 15,
    paddingBottom: 10
  }
});
