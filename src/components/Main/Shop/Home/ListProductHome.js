import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ProductHome from './ProductHome';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

export default class ListProductHome extends Component {
    render() {
        const { wrapper, header, title, mainListProduct } = styles;
        const { navigator } = this.props; //This navigator came from Shop/Home/index
        return (
            <View style={wrapper}>
                <View style={header}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={mainListProduct}>
                    <ProductHome id={0} imageSource={sp1} navigator={navigator} />
                    <ProductHome id={1} imageSource={sp2} navigator={navigator} />
                    <ProductHome id={2} imageSource={sp3} navigator={navigator} />
                    <ProductHome id={3} imageSource={sp4} navigator={navigator} />
                </View>
            </View>

        );
    }
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainListProduct: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    wrapper: {
        width: width - 20,
        margin: 10,
        padding: 15,
        paddingTop: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#292929',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3
    },
    image: {
        width: width - 40,
        height: height / 4
    },
    title: {
        marginTop: 15,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});

