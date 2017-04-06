import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const sp1 = require('../../../../media/temp/sp1.jpeg');
const sp2 = require('../../../../media/temp/sp2.jpeg');
const sp3 = require('../../../../media/temp/sp3.jpeg');
const back = require('../../../../media/appIcon/back.png');
const cart = require('../../../../media/appIcon/cartfull.png');

export default class ProductDetail extends Component {
    render() {
        const {
            wrapper, main
        } = styles;
        return (
            <View style={wrapper}>
                <View style={main}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
        padding: 10
    },
    main: {
        backgroundColor: '#FFF',
        flex: 1,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    }
});
