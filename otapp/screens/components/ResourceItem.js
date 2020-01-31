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
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <Text style={styles.text}>{this.props.resource}</Text>
          <TouchableHighlight
            style={styles.touch}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <Text style={styles.text}>Close Window</Text>
          </TouchableHighlight>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.text}>{this.props.resource}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ResourceItem;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 14,
    borderWidth: 1,
    borderColor: "lightgray"
  },
  text: {
    fontSize: 20
  },
  touch: {
    padding: 12
  }
});
