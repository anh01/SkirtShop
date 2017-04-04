import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Contact extends Component {
    render() {
        return (
            <View style={styles.cart}>
                <Text>Contact Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cart: {
        flex: 1,
        backgroundColor: '#E5CC00'
    }
});

export default Contact;