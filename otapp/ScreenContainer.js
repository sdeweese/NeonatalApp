import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from "./screens/HomeScreen";
import ModulesPage from "./screens/ModulesPage";

const NavigationStack = createStackNavigator({
    Home: {screen: HomeScreen},
    Modules: {screen: ModulesPage},
});

const Container = createAppContainer(NavigationStack);

export default Container; 