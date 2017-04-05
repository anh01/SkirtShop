import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Image
} from 'react-native';

import sp1 from '../../../../../media/temp/sp1.jpeg';

export default class CardDetail extends Component {
    render() {
        //This navigator come from ./Shop/Cart/index.js
        //navigator.push({ name: 'PRODUCT_DETAIL' })
        //navigator.push({ name: 'CHECKOUT' })
        const {
            wrapper, main, checkoutButton, product, mainRight,
            productNameContainer, productPriceContainer, productController,
            txtName, txtPrice, productImage, numberOfProduct, txtShowDetail,
            showDetailContainer
        } = styles;
        return (
            <View style={wrapper}>
                <ScrollView style={main}>
                    <View style={product}>
                        <Image source={sp1} style={productImage} />
                        <View style={mainRight}>
                            <View style={productNameContainer}>
                                <Text style={txtName}>Wool Blend Coat</Text>
                            </View>
                            <View style={productPriceContainer}>
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
                                <View style={showDetailContainer}>
                                    <Text style={txtShowDetail}>SHOW DETAIL</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={product}>
                        <Image source={sp1} style={productImage} />
                        <View style={mainRight}>
                            <View style={productNameContainer}>
                                <Text style={txtName}>Wool Blend Coat</Text>
                            </View>
                            <View style={productPriceContainer}>
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
                                <View style={showDetailContainer}>
                                    <Text style={txtShowDetail}>SHOW DETAIL</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={product}>
                        <Image source={sp1} style={productImage} />
                        <View style={mainRight}>
                            <View style={productNameContainer}>
                                <Text style={txtName}>Wool Blend Coat</Text>
                            </View>
                            <View style={productPriceContainer}>
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
                                <View style={showDetailContainer}>
                                    <Text style={txtShowDetail}>SHOW DETAIL</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={product}>
                        <Image source={sp1} style={productImage} />
                        <View style={mainRight}>
                            <View style={productNameContainer}>
                                <Text style={txtName}>Wool Blend Coat</Text>
                            </View>
                            <View style={productPriceContainer}>
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
                                <View style={showDetailContainer}>
                                    <Text style={txtShowDetail}>SHOW DETAIL</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={checkoutButton}>
                    <Text>Check out here</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        backgroundColor: '#2ABB9C'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#292929',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3
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
