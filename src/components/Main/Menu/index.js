import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Menu extends Component {
    render() {
        return (
            <View style={styles.menuContainer}>
                <Text>Menu Component</Text>
                <TouchableOpacity onPress={this.props.close}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: '#FFFFFF',
        flex: 1
    }
});

export default Menu;
