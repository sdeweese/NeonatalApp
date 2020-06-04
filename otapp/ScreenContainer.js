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
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import MamaSelfCare from "./screens/MamaSelfCare";

const NavigationStack = createStackNavigator({
  Home: { screen: HomeScreen,
    navigationOptions: { 
      headerStyle: {
        backgroundColor: "#c691a7",
        borderBottomColor: "#c691a7",
        borderBottomWidth: 3
      },
    },
  },
  Modules: { screen: ModulesPage,
    navigationOptions: { 
      headerStyle: {
        backgroundColor: "#c691a7",
        borderBottomColor: "#c691a7",
        borderBottomWidth: 3,
      },
    },
  },
  FeedingYourBaby: {
    screen: FeedingYourBaby,
      navigationOptions: { headerTitle: "Feeding Your Baby", 
        headerStyle: {
          backgroundColor: "#c691a7",
          borderBottomColor: "#c691a7",
          borderBottomWidth: 3,
        },
      }, // header at the top of the screen
  },
  KeepingBabyClean: {
    screen: KeepingBabyClean,
    navigationOptions: { headerTitle: "Keeping Baby Clean and Healthy",
      headerStyle: {
        backgroundColor: "#c691a7",
        borderBottomColor: "#c691a7",
        borderBottomWidth: 3,
      },
   }, // header at the top of the screen
  },
  WhenBabyGetsSick: {
    screen: WhenBabyGetsSick,
    navigationOptions: { headerTitle: "When Baby Gets Sick",
    headerStyle: {
      backgroundColor: "#c691a7",
      borderBottomColor: "#c691a7",
      borderBottomWidth: 3,
    },
   }, // header at the top of the screen
  },
  Database: {
    screen: Database,
    navigationOptions: { headerTitle: "Mother Information",
    headerStyle: {
      backgroundColor: "#c691a7",
      borderBottomColor: "#c691a7",
      borderBottomWidth: 3,
    },
   }, // header at the top of the screen
  },
  Resources: { screen: ResourcesMap,
    navigationOptions: { 
      headerStyle: {
        backgroundColor: "#c691a7",
        borderBottomColor: "#c691a7",
        borderBottomWidth: 3,
      },
    },
  },
  Messages: { screen: Messages,
    navigationOptions: { 
      headerStyle: {
        backgroundColor: "#c691a7",
        borderBottomColor: "#c691a7",
        borderBottomWidth: 3,
      },
    },
  },
  Admin: {
    screen: Admin,
    navigationOptions: { headerTitle: "Administrator",
    headerStyle: {
      backgroundColor: "#c691a7",
      borderBottomColor: "#c691a7",
      borderBottomWidth: 3,
    },
   }, // header at the top of the screen
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: { headerTitle: "Sign Up",
    headerStyle: {
      backgroundColor: "#c691a7",
      borderBottomColor: "#c691a7",
      borderBottomWidth: 3,
    },
   },
  },
  Login: {
    screen: Login,
    navigationOptions: { headerTitle: "Login",
    headerStyle: {
      backgroundColor: "#c691a7",
      borderBottomColor: "#c691a7",
      borderBottomWidth: 3,
    },
   },
  },
  MamaSelfCare: {
    screen: MamaSelfCare,
    navigationOptions: { headerTitle: "Mama Self Care",
    headerStyle: {
      backgroundColor: "#c691a7",
      borderBottomColor: "#c691a7",
      borderBottomWidth: 3,
    },
   },
  },
});
const Container = createAppContainer(NavigationStack);

export default Container;
