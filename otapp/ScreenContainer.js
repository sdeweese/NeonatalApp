import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import ModulesPage from "./screens/ModulesPage";
import Module1 from "./screens/Module1";
import Module1a from "./screens/Module1a";
import ResourcesMap from "./screens/ResourcesMap";

const NavigationStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Modules: { screen: ModulesPage },
  Module1: { screen: Module1 },
  Module1a: { screen: Module1a },
  Resources: { screen: ResourcesMap }
});

const Container = createAppContainer(NavigationStack);

export default Container;
