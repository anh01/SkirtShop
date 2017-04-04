import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import global from '../../../../global';

export default class Checkout extends Component {
    render() {
        return (
            <View style={styles.checkout}>
                <Text>Check Out Component</Text>
                <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                    <Text>Go back cart detail</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => { 
                        global.goToHome(); 
                        this.props.navigator.pop();
                    }}
                >
                    <Text>Go Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    checkout: {
        backgroundColor: '#B8B8B8',
        flex: 1
    }
});
