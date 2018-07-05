import { ListItem, List } from 'react-native-elements'
import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    Image,
    
} from "react-native";


import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from './components/CustomHeader'



const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]


class FriendsScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Friends",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Friends',
        drawerIcon: ({ tintColor }) => (
            <Image source={{ uri: 'https://png.icons8.com/ios/50/000000/groups.png' }}
                style={{ width: 20, height: 20 }} />


        ),

    })
    render() {
        return (

            <Container>

                <CustomHeader
                    title="Friends"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <Content>

                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            list.map((l, i) => (
                                <ListItem
                                    roundAvatar
                                    avatar={{ uri: l.avatar_url }}
                                    key={i}
                                    title={l.name}
                                />
                            ))
                        }
                    </List>

                </Content>
            </Container>
        )
    }

}


const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})
export default FriendsScreen;