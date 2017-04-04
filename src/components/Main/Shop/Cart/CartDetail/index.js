import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class CardDetail extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <View>
                <Text>Cart detail</Text>
                <TouchableOpacity onPress={() => navigator.push({ name: 'PRODUCT_DETAIL' })}>
                    <Text>See Product Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigator.push({ name: 'CHECKOUT' })}>
                    <Text>Check out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
