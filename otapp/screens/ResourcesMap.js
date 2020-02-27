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
        <ResourceItem resource="BUBIRO HEALTH CENTRE 2">
          <Text>
            Address: Bubiro Trading Centre, Ngogwe Sub County, Buikwe District
            /C /O P.O. Box 25, Uganda
          </Text>
          <Text>Phone Number: +256 704 131863</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/Bubiro.png")}
          />
        </ResourceItem>
        <ResourceItem resource="BUGUNGU HEALTH CENTRE 2"></ResourceItem>
        <ResourceItem resource="BUSABAGA HEALTH CENTRE 3"></ResourceItem>
        <ResourceItem resource="BUWAGAJJO HEALTH CENTRE 3">
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/Buwagajjo.jpg")}
          />
        </ResourceItem>
        <ResourceItem resource="DUNGI HEALTH CENTRE 2"></ResourceItem>
        <ResourceItem resource="HEALTH INITIATIVE OF AFRICA -UGANDA HEALTH CENTRE 3"></ResourceItem>
        <ResourceItem resource="KABIZZI HEALTH CENTRE 2">
          <Text>
            Address: Nyenga Division, Njeru Municipal Council in Buikwe District
          </Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/Kabizzi.gif")}
          />
        </ResourceItem>
        <ResourceItem resource="KALAGALA HEALTH CENTRE 2">
          <Text>
            Address: Kokko village Lunyolya parish kalagala sub county
            Bamunanika county luweero district Uganda country Bamunanika P.O.Box
            34 Luwero Uganda
          </Text>
          <Text>Phone Number: +256 39 2001043</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/Kalagala.jpg")}
          />
        </ResourceItem>
        <ResourceItem resource="KASUBI HEALTH CENTRE 3">
          <Text>
            Address: BWEYOGERERE, KASUBI ON MINISTRY OF DEFENCE BUILDING
          </Text>
          <Text>Phone Number: +256 759 100323</Text>
        </ResourceItem>
        <ResourceItem resource="KIWAYI HEALTH CENTRE 2"></ResourceItem>
        <ResourceItem resource="KIZIGO HEALTH CENTRE 2"></ResourceItem>
        <ResourceItem resource="KKONKO HEALTH CENTRE 2"></ResourceItem>
        <ResourceItem resource="LUGAZI HEALTH CENTRE 2">
          <Text>Address: 9W8M+WX Lugazi, Uganda</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/Lugazi.png")}
          />
        </ResourceItem>
        <ResourceItem resource="MAKINDU HEALTH CENTRE 2">
          <Text>
            Address: Busiu Sub-County, Along Mbale Tororo Road/c/o P.O.Box 904
            Mbale-Tororo Rd, Busiu, Uganda
          </Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/Makindu.png")}
          />
        </ResourceItem>
        <ResourceItem resource="NAJJEMBE HEALTH CENTRE 2"></ResourceItem>
        <ResourceItem resource="NAMINYA HEALTH CENTRE 2"></ResourceItem>
        <ResourceItem resource="NAMULESA HEALTH CENTRE 2"></ResourceItem>
        <ResourceItem resource="NGOGWE HEALTH CENTRE 3">
          <Text>Address: P.O Box 25, Uganda</Text>
          <Text>Phone Number: +256 772 528142</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/Ngogwe.png")}
          />
        </ResourceItem>
        <ResourceItem resource="NJERU T/C HEALTH CENTRE 3"></ResourceItem>
        <ResourceItem resource="NKOKONJERU GOVERNMENT HEALTH CENTRE 2">
          <Text>
            Address: Nkokonjeru Village B, Kitimbwa sub-county / c /o Kayunga
            Local Government, P.O.Box 18000, Uganda
          </Text>
          <Text>Phone Number: +256 772 567979</Text>
        </ResourceItem>
        <ResourceItem resource="SSENYI HEALTH CENTRE 2"></ResourceItem>
        <ResourceItem resource="SSI HEALTH CENTRE 3"></ResourceItem>
        <ResourceItem resource="TONGOLO HEALTH CENTRE 2">
          <Text>
            Address: Tongolo Trading Centre, Nyenga Sub County, Buikwe North /C
            /O P.O. Box 4629, Buikwe, Uganda
          </Text>
          <Text>Phone Number: +256 772 971109</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/Tongolo.png")}
          />
        </ResourceItem>
        <ResourceItem resource="WAKISI HEALTH CENTRE 3"></ResourceItem>
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
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
