import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class HomePage extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <View style={styles.homepage}>
                <Text>Home page</Text>
                <TouchableOpacity onPress={() => navigator.push({ name: 'PRODUCT_DETAIL' })}>
                    <Text>See product detail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigator.push({ name: 'LIST_PRODUCT' })}>
                    <Text>See List products</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homepage: {
        backgroundColor: '#E2E1DF',
        flex: 1
    }
});

export default HomePage;
