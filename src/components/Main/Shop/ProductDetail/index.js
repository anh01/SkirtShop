import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ProductDetail extends Component {
    render() {
        return (
            <View style={styles.productDetail}>
                <Text>Product Detail</Text>
                <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    productDetail: {
        backgroundColor: '#14456C',
        flex: 1
    }
});

export default ProductDetail;
