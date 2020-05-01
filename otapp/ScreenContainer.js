import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import ModulesPage from "./screens/ModulesPage";
import FeedingYourBaby from "./screens/FeedingYourBaby";
import KeepingBabyClean from "./screens/KeepingBabyClean";
import WhenBabyGetsSick from "./screens/WhenBabyGetsSick";
import ResourcesMap from "./screens/ResourcesMap";
import Admin from "./screens/Admin";
import Messages from "./screens/Messages";
import Database from "./screens/Database";
import Backup from "./screens/Backup";


const NavigationStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Modules: { screen: ModulesPage },
  FeedingYourBaby: {
    screen: FeedingYourBaby,
    navigationOptions: { headerTitle: "Feeding Your Baby" } // header at the top of the screen
  },
  KeepingBabyClean: {
    screen: KeepingBabyClean,
    navigationOptions: { headerTitle: "Keeping Baby Clean and Healthy" } // header at the top of the screen
  },
  WhenBabyGetsSick: {
    screen: WhenBabyGetsSick,
    navigationOptions: { headerTitle: "When Baby Gets Sick" } // header at the top of the screen
  },
  Database: {
    screen: Database,
    navigationOptions: { headerTitle: "Mother Information" } // header at the top of the screen
  },
  Resources: { screen: ResourcesMap },
  Messages: { screen: Messages },
  Admin: { 
    screen: Admin, 
    navigationOptions: { headerTitle: "Administrator" } // header at the top of the screen
  }, 
  Backup: {
    screen: Backup,
    navigationOptions: { headerTitle: "Restore Backup" } 
  },
});

const Container = createAppContainer(NavigationStack);

export default Container;
