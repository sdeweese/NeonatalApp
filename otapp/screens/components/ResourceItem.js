import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableHighlight,
  Modal,
  Image,
  Animated
} from "react-native";

class ResourceItem extends React.Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: require("../../assets/arrowhead-up.png"),
      down: require("../../assets/arrowhead-down.png")
    };

    this.state = {
      title: props.resource,
      expanded: false,
      animation: new Animated.Value(50)
    };
  }
  //state = { modalVisible: false };

  toggle() {
    let initialValue = this.state.expanded
      ? this.state.maxHeight + this.state.minHeight
      : this.state.minHeight;

    let finalValue = this.state.expanded
      ? this.state.minHeight
      : this.state.maxHeight + this.state.minHeight;

    //console.log(this.state.minHeight);
    this.setState({
      expanded: !this.state.expanded
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue
    }).start();
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }

  render() {
    let icon = this.icons["down"];

    if (this.state.expanded) {
      icon = this.icons["up"];
    }

    return (
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        <View style={styles.container}>
          <View
            style={styles.titleContainer}
            onLayout={this._setMinHeight.bind(this)}
          >
            <Text style={styles.title}>{this.state.title}</Text>
            <TouchableHighlight
              style={styles.button}
              onPress={this.toggle.bind(this)}
              underlayColor="#f1f1f1"
            >
              <Image style={styles.buttonImage} source={icon}></Image>
            </TouchableHighlight>
          </View>
          <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
            {this.props.children}
          </View>
        </View>
      </Animated.View>
    );
  }

  /*   setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  } */

  /*   render() {
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
            <Text style={styles.text}>Address: {this.props.address}</Text>
            <Text style={styles.text}>
              Telephone Number: {this.props.phone}
            </Text>
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
  } */
}

export default ResourceItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    overflow: "hidden"
  },

  titleContainer: {
    flexDirection: "row"
  },

  title: {
    flex: 1,
    padding: 15,
    color: "#2a2f43",
    fontWeight: "bold"
  },

  button: {},

  buttonImage: {
    width: 30,
    height: 25
  },

  body: {
    padding: 10,
    paddingTop: 0
  }
  /* listItem: {
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
  } */
});
