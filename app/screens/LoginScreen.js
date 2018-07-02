import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native"

class LoginScreen extends Component{
    render() {
    return (
        <View>
            <Text> This is the login Screen </Text>
            <Button onPress= {() => this.props.navigation.navigate('HomeScreen')} title="Go to the Home Screen" />
            <Button onPress= {() => this.props.navigation.navigate('DropDown')} title="Go to the Drop Down Screen" />
            <Button onPress= {() => this.props.navigation.navigate('DropDown2')} title="Go to the Drop Down 2 Screen" />
            </View>
        );
    }
}

export default LoginScreen;
