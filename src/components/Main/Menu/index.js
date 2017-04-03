import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Menu extends Component {
    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTH' });
    }
    render() {
        return (
            <View style={styles.menuContainer}>
                <Text>Menu Component</Text>
                <TouchableOpacity onPress={this.props.close}>
                    <Text>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
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
