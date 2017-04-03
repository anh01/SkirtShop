import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import Search from './Search';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { topBar, body, container } = styles;
        return (
            <View style={container}>
                <View style={topBar}>
                    <Text>Top bar</Text>
                    <TouchableOpacity onPress={this.props.open}>
                        <Text>Open</Text>
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TabNavigator>
                        <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Home />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <Cart />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact />
                        </TabNavigator.Item>
                    </TabNavigator>                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar: {
        flex: 1,
        backgroundColor: '#1266C3'
    },
    body: {
        flex: 8,
        backgroundColor: '#3F4F67'
    }
});
