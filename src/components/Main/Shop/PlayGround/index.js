import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';

export default class PlayGround extends Component {
    render() {
        return (
            <ScrollView style={styles.homepage}>
                <TouchableOpacity>
                    <Card />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Card />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Card />
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    homepage: {
        backgroundColor: '#E3E2E0',
        flex: 1
    }
});
