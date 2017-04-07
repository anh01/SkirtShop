import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';

class SearchPageItem extends Component {
    gotoDetail(idProduct) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', idProduct });
    }
    render() {
        const {
            product, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage, 
            txtShowDetail, showDetailContainer
        } = styles;
        return (
            <View style={product}>
                <Image source={sp1} style={productImage} />
                <View style={mainRight}>
                    <Text style={txtName}>Wool Blend Coat</Text>
                    <Text style={txtPrice}>460$</Text>
                    <Text style={txtMaterial}>Material Nylon</Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={txtColor}>Color Black</Text>
                        <View style={{ height: 15, width: 15, backgroundColor: 'green', borderRadius: 15, marginLeft: 10 }} />
                    </View>
                    <TouchableOpacity style={showDetailContainer} onPress={() => this.gotoDetail(10)}>
                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
    product: {
        flexDirection: 'row',
        margin: 10,
        marginTop: 0,
        padding: 10,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderColor: '#F1F1F1'
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});

export default SearchPageItem;