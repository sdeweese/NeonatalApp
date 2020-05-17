import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  Linking,
  Button
} from "react-native";
import ExpandableItem from "./components/ExpandableItem";

class ResourcesMap extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Resources</Text>
        <ExpandableItem title="BUBIRO HEALTH CENTRE 2">
          <Text>
            Address: Bubiro Trading Centre, Ngogwe Sub County, Buikwe District
            /C /O P.O. Box 25, Uganda
          </Text>
          <Text>Phone Number: +256 704 131863</Text>
          <Image
            style={styles.image}
            source={require("../assets/Bubiro.png")}
          />
        </ExpandableItem>
        <ExpandableItem title="BUGUNGU HEALTH CENTRE 2"></ExpandableItem>
        <ExpandableItem title="BUSABAGA HEALTH CENTRE 3"></ExpandableItem>
        <ExpandableItem title="BUWAGAJJO HEALTH CENTRE 3">
          <Image
            style={styles.image}
            source={require("../assets/Buwagajjo.jpg")}
          />
        </ExpandableItem>
        <ExpandableItem title="DUNGI HEALTH CENTRE 2"></ExpandableItem>
        <ExpandableItem title="HEALTH INITIATIVE OF AFRICA -UGANDA HEALTH CENTRE 3"></ExpandableItem>
        <ExpandableItem title="KABIZZI HEALTH CENTRE 2">
          <Text>
            Address: Nyenga Division, Njeru Municipal Council in Buikwe District
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/Kabizzi.gif")}
          />
        </ExpandableItem>
        <ExpandableItem title="KALAGALA HEALTH CENTRE 2">
          <Text>
            Address: Kokko village Lunyolya parish kalagala sub county
            Bamunanika county luweero district Uganda country Bamunanika P.O.Box
            34 Luwero Uganda
          </Text>
          <Text>Phone Number: +256 39 2001043</Text>
          <Button
            title="Book an Appointment"
            onPress={() =>
              Linking.openURL(
                "https://www.facebook.com/KalagalaHealthCentreIv/"
              )
            }
          />
          <Image
            style={styles.image}
            source={require("../assets/Kalagala.jpg")}
          />
        </ExpandableItem>
        <ExpandableItem title="KASUBI HEALTH CENTRE 3">
          <Text>
            Address: BWEYOGERERE, KASUBI ON MINISTRY OF DEFENCE BUILDING
          </Text>
          <Text>Phone Number: +256 759 100323</Text>
        </ExpandableItem>
        <ExpandableItem title="KIWAYI HEALTH CENTRE 2"></ExpandableItem>
        <ExpandableItem title="KIZIGO HEALTH CENTRE 2"></ExpandableItem>
        <ExpandableItem title="KKONKO HEALTH CENTRE 2"></ExpandableItem>
        <ExpandableItem title="LUGAZI HEALTH CENTRE 2">
          <Text>Address: 9W8M+WX Lugazi, Uganda</Text>
          <Image
            style={styles.image}
            source={require("../assets/Lugazi.png")}
          />
        </ExpandableItem>
        <ExpandableItem title="MAKINDU HEALTH CENTRE 2">
          <Text>
            Address: Busiu Sub-County, Along Mbale Tororo Road/c/o P.O.Box 904
            Mbale-Tororo Rd, Busiu, Uganda
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/Makindu.png")}
          />
        </ExpandableItem>
        <ExpandableItem title="NAJJEMBE HEALTH CENTRE 2"></ExpandableItem>
        <ExpandableItem title="NAMINYA HEALTH CENTRE 2"></ExpandableItem>
        <ExpandableItem title="NAMULESA HEALTH CENTRE 2"></ExpandableItem>
        <ExpandableItem title="NGOGWE HEALTH CENTRE 3">
          <Text>Address: P.O Box 25, Uganda</Text>
          <Text>Phone Number: +256 772 528142</Text>
          <Image
            style={styles.image}
            source={require("../assets/Ngogwe.png")}
          />
        </ExpandableItem>
        <ExpandableItem title="NJERU T/C HEALTH CENTRE 3"></ExpandableItem>
        <ExpandableItem title="NKOKONJERU GOVERNMENT HEALTH CENTRE 2">
          <Text>
            Address: Nkokonjeru Village B, Kitimbwa sub-county / c /o Kayunga
            Local Government, P.O.Box 18000, Uganda
          </Text>
          <Text>Phone Number: +256 772 567979</Text>
        </ExpandableItem>
        <ExpandableItem title="SSENYI HEALTH CENTRE 2"></ExpandableItem>
        <ExpandableItem title="SSI HEALTH CENTRE 3"></ExpandableItem>
        <ExpandableItem title="TONGOLO HEALTH CENTRE 2">
          <Text>
            Address: Tongolo Trading Centre, Nyenga Sub County, Buikwe North /C
            /O P.O. Box 4629, Buikwe, Uganda
          </Text>
          <Text>Phone Number: +256 772 971109</Text>
          <Image
            style={styles.image}
            source={require("../assets/Tongolo.png")}
          />
        </ExpandableItem>
        <ExpandableItem title="WAKISI HEALTH CENTRE 3"></ExpandableItem>
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
    borderColor: "#d6d7da",
    backgroundColor: "#f2dac8"
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    paddingTop: 15,
    paddingBottom: 10
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    margin: 10,
    resizeMode: "contain",
  }
});
