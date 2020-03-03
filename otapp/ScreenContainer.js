import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import ModulesPage from "./screens/ModulesPage";
import FeedingYourBaby from "./screens/FeedingYourBaby";
import KeepingBabyClean from "./screens/KeepingBabyClean";
import WhenBabyGetsSick from "./screens/WhenBabyGetsSick";
import Module1b from "./screens/Module1b";
import ResourcesMap from "./screens/ResourcesMap";
import Admin from "./screens/Admin";

const NavigationStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Modules: { screen: ModulesPage },
  FeedingYourBaby: { screen: FeedingYourBaby, navigationOptions: { headerTitle: "Feeding Your Baby" } },
  KeepingBabyClean: { screen: KeepingBabyClean, navigationOptions: { headerTitle: "Keeping Baby Clean and Healthy" } },
  WhenBabyGetsSick: { screen: WhenBabyGetsSick, navigationOptions: { headerTitle: "When Baby Gets Sick" } },
  Module1b: { screen: Module1b },
  Resources: { screen: ResourcesMap },
  Admin: { screen: Admin }
});

const Container = createAppContainer(NavigationStack);

export default Container;
