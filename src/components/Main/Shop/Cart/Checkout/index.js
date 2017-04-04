import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import global from '../../../../global';

export default class Checkout extends Component {
    render() {
        return (
            <View>
                <Text>Check Out Component</Text>
                <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                    <Text>Go back cart detail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => global.goToHome()}>
                    <Text>Go Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
