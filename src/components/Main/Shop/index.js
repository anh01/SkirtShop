import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import Search from './Search';
import TopBar from './TopBar';
import PlayGround from './PlayGround';

import global from '../../global';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'play' };
    }

    //component did mount adn goToHome function will be used in another component. 
    componentDidMount() {
        global.goToHome = this.goToHome.bind(this);
    }

    goToHome() {
        this.setState({ ...this.state, selectedTab: 'home' });
    }

    render() {
        const { body, container } = styles;
        return (
            <View style={container}>
                <TopBar open={this.props.open} />
                <View style={body}>
                    <TabNavigator>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'home'}
                            title="Home"
                            onPress={() => this.setState({ selectedTab: 'home' })}
                        >
                            <Home />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'cart'}
                            title="Cart"
                            onPress={() => this.setState({ selectedTab: 'cart' })}
                        >
                            <Cart />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'search'}
                            title="Search"
                            onPress={() => this.setState({ selectedTab: 'search' })}
                        >
                            <Search />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'contact'}
                            title="Contact"
                            onPress={() => this.setState({ selectedTab: 'contact' })}
                        >
                            <Contact />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'play'}
                            title="Play"
                            onPress={() => this.setState({ selectedTab: 'play' })}
                        >
                            <PlayGround />
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
    body: {
        flex: 7,
        backgroundColor: '#3F4F67'
    }
});
