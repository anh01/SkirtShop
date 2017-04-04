import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class CardDetail extends Component {
    render() {
        return (
            <View>
                <Text>Cart detail</Text>
                <TouchableOpacity onPress={() => this.props.navigator.push({ name: 'CHECKOUT' })}>
                    <Text>Check out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
