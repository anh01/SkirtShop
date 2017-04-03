import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Cart extends Component {
    render() {
        return (
            <View style={styles.cart}>
                <Text>Cart Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cart: {
        flex: 1,
        backgroundColor: '#222224'
    }
});

export default Cart;
