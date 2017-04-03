import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.cart}>
                <Text>Home Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cart: {
        flex: 1,
        backgroundColor: '#81B43D'
    }
});

export default Home;
