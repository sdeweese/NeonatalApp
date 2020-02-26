import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import ResourceItem from "./components/ResourceItem";

class ResourcesMap extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Resources</Text>
        <Image
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
          }}
          resizeMode="contain"
          source={require("../assets/Bubiro.png")}
        />
        <ResourceItem
          resource="BUBIRO HEALTH CENTRE 2"
          address="Bubiro Trading Centre, Ngogwe Sub County, Buikwe District /C /O P.O. Box 25, Uganda"
          phone="+256 704 131863"
        />
        <ResourceItem resource="BUGUNGU HEALTH CENTRE 2" />
        <ResourceItem resource="BUSABAGA HEALTH CENTRE 3" />
        <ResourceItem resource="BUWAGAJJO HEALTH CENTRE 3" />
        <ResourceItem resource="DUNGI HEALTH CENTRE 2" />
        <ResourceItem resource="HEALTH INITIATIVE OF AFRICA -UGANDA HEALTH CENTRE 3" />
        <ResourceItem
          resource="KABIZZI HEALTH CENTRE 2"
          address="Nyenga Division, Njeru Municipal Council in Buikwe District"
        />
        <ResourceItem
          resource="KALAGALA HEALTH CENTRE 2"
          address="Kokko village
          Lunyolya parish
          kalagala sub county
          Bamunanika county
          luweero district
          Uganda country
          Bamunanika P.O.Box 34 Luwero Uganda"
          phone="+256 39 2001043"
        />
        <ResourceItem
          resource="KASUBI HEALTH CENTRE 3"
          address="BWEYOGERERE, KASUBI ON MINISTRY OF DEFENCE BUILDING"
          phone="+256 759 100323"
        />
        <ResourceItem resource="KIWAYI HEALTH CENTRE 2" />
        <ResourceItem resource="KIZIGO HEALTH CENTRE 2" />
        <ResourceItem resource="KKONKO HEALTH CENTRE 2" />
        <ResourceItem
          resource="LUGAZI HEALTH CENTRE 2"
          address="9W8M+WX Lugazi, Uganda"
        />
        <ResourceItem
          resource="MAKINDU HEALTH CENTRE 2"
          address="Busiu Sub-County, Along Mbale Tororo Road/c/o P.O.Box 904 Mbale-Tororo Rd, Busiu, Uganda"
        />
        <ResourceItem resource="NAJJEMBE HEALTH CENTRE 2" />
        <ResourceItem resource="NAMINYA HEALTH CENTRE 2" />
        <ResourceItem resource="NAMULESA HEALTH CENTRE 2" />
        <ResourceItem
          resource="NGOGWE HEALTH CENTRE 3"
          address="P.O Box 25, Uganda"
          phone="+256 772 528142"
        />
        <ResourceItem resource="NJERU T/C HEALTH CENTRE 3" />
        <ResourceItem
          resource="NKOKONJERU GOVERNMENT HEALTH CENTRE 2"
          address="Nkokonjeru Village B, Kitimbwa sub-county / c /o Kayunga Local Government, P.O.Box 18000, Uganda"
          phone="+256 772 567979"
        />
        <ResourceItem resource="SSENYI HEALTH CENTRE 2" />
        <ResourceItem resource="SSI HEALTH CENTRE 3" />
        <ResourceItem
          resource="TONGOLO HEALTH CENTRE 2"
          address="Tongolo Trading Centre, Nyenga Sub County, Buikwe North /C /O P.O. Box 4629, Buikwe, Uganda"
          phone="+256 772 971109"
        />
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
    borderColor: "#d6d7da"
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    paddingTop: 15,
    paddingBottom: 10
  }
});
