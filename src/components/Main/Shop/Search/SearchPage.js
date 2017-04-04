import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class SearchPage extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <View style={styles.homepage}>
                <Text>Search page</Text>
                <TouchableOpacity onPress={() => navigator.push({ name: 'PRODUCT_DETAIL' })}>
                    <Text>See product detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homepage: {
        backgroundColor: '#B9D9F1',
        flex: 1
    }
});

export default SearchPage;
