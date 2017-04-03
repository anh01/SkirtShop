import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Authentication extends Component {
    render() {
        return (
            <View style={styles.auth}>
                    <Text>Athentication Component</Text>
                    <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                        <Text>Go back to Menu Component</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    auth: {
        flex: 1,
        backgroundColor: '#CACECF'
    }
});

export default Authentication;
