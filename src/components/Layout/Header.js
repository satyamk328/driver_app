import React from 'react';
import { View, Text, StyleSheet,Block } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  

export default function Header(props) {

return (
    <Block style={ styles.header }>
        <Block>
            <Icon name="md-menu" size={32} color="grey" onPress={() => navigation.openDrawer()} />
            <Text style={ styles.title } p>{ props.title }</Text>
        </Block>
        <Block>
            <Icon name="md-search" size={32} color="grey" />
        </Block>
    </Block>
)
}