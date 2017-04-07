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
        this.state = { 
            selectedTab: 'home',
            arrCartItems: [
                { 
                    product: { id: 0, name: 'Wool Blend Coat', price: 460, images: ['sp1.jpeg'] }, 
                    quantity: 1 
                },
                { 
                    product: { id: 1, name: 'New Fashion', price: 320, images: ['sp2.jpeg'] }, 
                    quantity: 2 
                }
            ] 
        };
    }

    //component did mount adn goToHome function will be used in another component. 
    componentDidMount() {
        global.goToHome = this.goToHome.bind(this);
    }

    goToHome() {
        this.setState({ ...this.state, selectedTab: 'home' });
    }
    
    incrQuantityProduct(productId) {
        const item = this.state.arrCartItems.find(e => e.product.id === productId);
        item.quantity++;
        this.setState(this.state);
    }

    decrQuantityProduct(productId) {
        const item = this.state.arrCartItems.find(e => e.product.id === productId);
        item.quantity--;
        this.setState(this.state);
    }

    removeProduct(productId) {
        this.setState({ 
            ...this.state, 
            arrCartItems: this.state.arrCartItems.filter(item => item.product.id !== productId) 
        });
    }

    render() {
        const { body, container, navIconStyle } = styles;
        const { arrCartItems } = this.state;
        const controller = { 
            incr: this.incrQuantityProduct.bind(this),
            decr: this.decrQuantityProduct.bind(this),
            remove: this.removeProduct.bind(this)
        };
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
                            onPress={() => this.setState({ ...this.state, selectedTab: 'home' })}
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
                            onPress={() => this.setState({ ...this.state, selectedTab: 'cart' })}
                        >
                            <Cart data={arrCartItems} controller={controller} />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            titleStyle={styles.titleStyle}
                            selectedTitleStyle={styles.selectedStyle}
                            renderIcon={() => <Image style={navIconStyle} source={searchIcon0} />}
                            renderSelectedIcon={() => <Image style={navIconStyle} source={searchIcon} />}
                            selected={this.state.selectedTab === 'search'}
                            title="Search"
                            onPress={() => this.setState({ ...this.state, selectedTab: 'search' })}
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
                            onPress={() => this.setState({ ...this.state, selectedTab: 'contact' })}
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
                            onPress={() => this.setState({ ...this.state, selectedTab: 'play' })}
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
        backgroundColor: 'transparent'
    },
    navIconStyle: {
        width: 25,
        height: 25
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

class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}
