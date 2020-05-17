import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  Animated,
} from "react-native";

class ExpandableItem extends React.Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: require("../../assets/arrowhead-up.png"),
      down: require("../../assets/arrowhead-down.png"),
    };

    this.state = {
      title: props.title,
      expanded: false,
      animation: new Animated.Value(55),
    };
  }

  toggle() {
    let initialValue = this.state.expanded
      ? this.state.maxHeight + this.state.minHeight
      : this.state.minHeight;

    let finalValue = this.state.expanded
      ? this.state.minHeight
      : this.state.maxHeight + this.state.minHeight;

    //console.log(this.state.minHeight);
    this.setState({
      expanded: !this.state.expanded,
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue,
    }).start();
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height + 5,
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height + 10,
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
            {this.props.children /*this is the child where more info goes */}
          </View>
        </View>
      </Animated.View>
    );
  }
}

export default ExpandableItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    overflow: "hidden",
  },

  titleContainer: {
    flexDirection: "row",
  },

  title: {
    flex: 1,
    margin: 10,
    marginBottom: 15,
    fontSize: 15,
    color: "#682f2f",
    fontWeight: "bold",
  },

  button: {},

  buttonImage: {
    width: 30,
    height: 25,
  },

  body: {
    padding: 10,
    paddingTop: 0,
  },
});
