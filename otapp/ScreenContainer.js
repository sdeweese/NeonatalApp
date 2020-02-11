import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import ModulesPage from "./screens/ModulesPage";
import FeedingYourBaby from "./screens/FeedingYourBaby";
import Module1b from "./screens/Module1b";
import ResourcesMap from "./screens/ResourcesMap";

const NavigationStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Modules: { screen: ModulesPage },
  FeedingYourBaby: { screen: FeedingYourBaby },
  Module1b: { screen: Module1b },
  Resources: { screen: ResourcesMap }
});

const Container = createAppContainer(NavigationStack);

export default Container;
