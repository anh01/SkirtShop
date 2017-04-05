import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';

import sp1 from '../../../../../media/temp/sp1.jpeg';

class CartItem extends Component {
    gotoDetail(idProduct) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', idProduct });
    }
    render() {
        const {
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct, 
            txtShowDetail, showDetailContainer
        } = styles;
        return (
            <View style={product}>
                <Image source={sp1} style={productImage} />
                <View style={mainRight}>
                    <View>
                        <Text style={txtName}>Wool Blend Coat</Text>
                    </View>
                    <View>
                        <Text style={txtPrice}>460.000 VND</Text>
                    </View>
                    <View style={productController}>
                        <View style={numberOfProduct}>
                            <TouchableOpacity>
                                <Text>+</Text>
                            </TouchableOpacity>
                            <Text>1</Text>
                            <TouchableOpacity>
                                <Text>-</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={showDetailContainer} onPress={() => this.gotoDetail(10)}>
                            <Text style={txtShowDetail}>SHOW DETAIL</Text>
                        </TouchableOpacity>
                    </View>
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
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
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
        fontSize: 20,
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default CartItem;
