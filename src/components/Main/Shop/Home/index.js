import React, { Component } from 'react';
import { View, StyleSheet, Navigator } from 'react-native';
import ProductDetail from '../ProductDetail';
import HomePage from './HomePage';
import ListProduct from '../ListProduct';

const renderScene = (route, navigator) => {
    if (route.name === 'PRODUCT_DETAIL') return <ProductDetail navigator={navigator} />;
    if (route.name === 'LIST_PRODUCT') return <ListProduct navigator={navigator} />;
    return <HomePage navigator={navigator} />;
};

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator 
                    initialRoute={{ name: 'CART_DETAIL' }}
                    renderScene={renderScene}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#C0DCF3'
    }
});

export default Home;
