import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import { Icon } from 'react-native-elements'

export default class HeaderScreen extends Component {
    render() {
        return (<View style={{
            height: 90,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 20 }}
                onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('DrawerOpen');
                }}>
                <Icon
                    name='rowing' />
            </TouchableHighlight>
        </View>);
    }
}