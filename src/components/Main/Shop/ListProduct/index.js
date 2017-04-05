import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class ListProduct extends Component {
    render() {
        const { navigator, idList } = this.props;
        return (
            <View style={styles.listProduct}>
                <Text>ListProduct id = {idList}</Text>
                <TouchableOpacity onPress={() => navigator.pop()}>
                    <Text>Back to Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigator.push({ name: 'PRODUCT_DETAIL' })}>
                    <Text>Go to product detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listProduct: {
        backgroundColor: '#AEAEAE',
        flex: 1
    }
});

export default ListProduct;
