import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import Search from './Search';
import TopBar from './TopBar';
import PlayGround from './PlayGround';
import global from '../../global';

import homeIcon from '../../../media/appIcon/home.png';
import homeIcon0 from '../../../media/appIcon/home0.png';
import cartIcon from '../../../media/appIcon/cart.png';
import cartIcon0 from '../../../media/appIcon/cart0.png';
import searchIcon from '../../../media/appIcon/search.png';
import searchIcon0 from '../../../media/appIcon/search0.png';
import contactIcon from '../../../media/appIcon/contact.png';
import contactIcon0 from '../../../media/appIcon/contact0.png';
import playIcon from '../../../media/appIcon/playground.png';
import playIcon0 from '../../../media/appIcon/playground0.png';

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
        const { body, container, navIconStyle } = styles;
        return (
            <View style={container}>
                <TopBar open={this.props.open} />
                <View style={body}>
                    <TabNavigator>
                        <TabNavigator.Item
                            titleStyle={styles.titleStyle}
                            selectedTitleStyle={styles.selectedStyle}
                            selected={this.state.selectedTab === 'home'}
                            renderIcon={() => <Image style={navIconStyle} source={homeIcon0} />}
                            renderSelectedIcon={() => <Image style={navIconStyle} source={homeIcon} />}
                            title="Home"
                            onPress={() => this.setState({ selectedTab: 'home' })}
                        >
                            <Home />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            titleStyle={styles.titleStyle}
                            selectedTitleStyle={styles.selectedStyle}
                            renderIcon={() => <Image style={navIconStyle} source={cartIcon0} />}
                            renderSelectedIcon={() => <Image style={navIconStyle} source={cartIcon} />}
                            selected={this.state.selectedTab === 'cart'}
                            title="Cart"
                            onPress={() => this.setState({ selectedTab: 'cart' })}
                        >
                            <Cart />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            titleStyle={styles.titleStyle}
                            selectedTitleStyle={styles.selectedStyle}
                            renderIcon={() => <Image style={navIconStyle} source={searchIcon0} />}
                            renderSelectedIcon={() => <Image style={navIconStyle} source={searchIcon} />}
                            selected={this.state.selectedTab === 'search'}
                            title="Search"
                            onPress={() => this.setState({ selectedTab: 'search' })}
                        >
                            <Search />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            titleStyle={styles.titleStyle}
                            selectedTitleStyle={styles.selectedStyle}
                            renderIcon={() => <Image style={navIconStyle} source={contactIcon0} />}
                            renderSelectedIcon={() => <Image style={navIconStyle} source={contactIcon} />}
                            selected={this.state.selectedTab === 'contact'}
                            title="Contact"
                            onPress={() => this.setState({ selectedTab: 'contact' })}
                        >
                            <Contact />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            titleStyle={styles.titleStyle}
                            selectedTitleStyle={styles.selectedStyle}
                            renderIcon={() => <Image style={navIconStyle} source={playIcon0} />}
                            renderSelectedIcon={() => <Image style={navIconStyle} source={playIcon} />}
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
    },
    navIconStyle: {
        width: 30,
        height: 30
    },
    selectedStyle: { 
        color: '#2ABB9C', 
        fontWeight: 'bold',
        fontFamily: 'Avenir' 
    },
    titleStyle: {
        fontFamily: 'Avenir' 
    }
});
