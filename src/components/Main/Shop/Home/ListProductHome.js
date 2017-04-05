import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

export default class ListProductHome extends Component {
    goToProductDetail(idProduct) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', idProduct });
    }
    render() {
        const {
            listProduct, mainListProduct, productImage,
            productFooter, productPrice, product, productName
        } = styles;
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={styles.title}>TOP PRODUCT</Text>
                </View>
                <View style={listProduct}>
                    <View style={mainListProduct}>
                        <TouchableOpacity style={product} onPress={() => this.goToProductDetail.bind(this)(0)}>
                            <Image style={productImage} source={sp1} />
                            <View style={productFooter}>
                                <Text style={productName}>Giày cao gót 5cm mũi nhọn quai hậu</Text>
                                <Text style={productPrice}>430,000 VND</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={product} onPress={() => this.goToProductDetail.bind(this)(1)}>
                            <Image style={productImage} source={sp2} />
                            <View style={productFooter}>
                                <Text style={productName}>Giày cao gót 5cm mũi nhọn quai hậu</Text>
                                <Text style={productPrice}>430,000 VND</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={product} onPress={() => this.goToProductDetail.bind(this)(2)}>
                            <Image style={productImage} source={sp3} />
                            <View style={productFooter}>
                                <Text style={productName}>Giày cao gót 5cm mũi nhọn quai hậu</Text>
                                <Text style={productPrice}>430,000 VND</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={product} onPress={() => this.goToProductDetail.bind(this)(3)}>
                            <Image style={productImage} source={sp4} />
                            <View style={productFooter}>
                                <Text style={productName}>Giày cao gót 5cm mũi nhọn quai hậu</Text>
                                <Text style={productPrice}>430,000 VND</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

const { width, height } = Dimensions.get('window');
const imageWidth = (width / 2) - 35;
const imageHeight = (imageWidth * 452) / 361;
const productWidth = (width / 2) - 30;
const productHeight = imageHeight * 1.5;
const styles = StyleSheet.create({
    mainListProduct: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    product: {
        alignItems: 'center',
        width: productWidth,
        height: productHeight,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        borderColor: '#DFDFDC',
        shadowColor: '#D9D9D9',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 3
        }
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        borderRadius: 2,
        borderColor: '#F6F6F6',
        borderWidth: 1
    },
    productFooter: {
        marginTop: 20
    },
    productName: {
        color: '#989898',
        paddingBottom: 5
    },
    productPrice: {
        color: '#C92A62',
        fontWeight: '500'
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

