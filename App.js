import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import MapView, { Marker, AnimatedRegion, Polyline } from "react-native-maps";
import {createStackNavigator} from 'react-navigation'

import LoginScreen from './app/screens/LoginScreen'
import HomeScreen from './app/screens/HomeScreen'
import DropDown from './app/screens/DropDown'

export default class App extends React.Component{
    render() {
    return (
    <AppNavigator/>
    );
    }
}

const AppNavigator = createStackNavigator({
    LoginScreen: {screen : LoginScreen},
    HomeScreen: {screen : HomeScreen},
    DropDown: {screen : DropDown}
})
