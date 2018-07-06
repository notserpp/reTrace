import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

class CustomHeader extends Component {
    render() {
        return (

            <Header>
                
                    <Left><Icon name="menu" onPress={() => this.props.drawerOpen()} /></Left>
                    <View style={{ flex: 1 }}>
                    <Left><Image source={{ uri: 'https://i.imgur.com/AFs3hav.png' }}
                        style={{ width: 40, height: 40 }} /></Left>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body></View>
                    <Right />
                
            </Header>

        );
    }
}
export default CustomHeader;