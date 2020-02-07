import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableHighlight,
  Modal
} from "react-native";

class ResourceItem extends React.Component {
  state = { modalVisible: false };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.listItem}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          supportedOrientations={['landscape']}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.listItem}>
            <Text style={styles.text}>{this.props.resource}</Text>
            <Text style={styles.text}>Address: </Text>
            <Text style={styles.text}>Telephone Number:</Text>
            <TouchableHighlight
              style={styles.touch}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text style={styles.text}>Close Window</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableHighlight
          supportedOrientations={['landscape']}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.button}>{this.props.resource}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ResourceItem;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 15,
    marginHorizontal: 25
  },
  text: {
    fontSize: 18,
    padding: 5
  },
  touch: {
    padding: 12,
    borderWidth: 1,
    borderColor: "lightgray"
  },
  button: {
    fontSize: 18,
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: "dotted",
    borderColor: "green"
  }
});
