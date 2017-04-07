import React, { Component } from 'react';
import { View, StyleSheet, Navigator } from 'react-native';
import ProductDetail from '../ProductDetail';
import SearchPage from './SearchPage';

const renderScene = (route, navigator) => {
    if (route.name === 'PRODUCT_DETAIL') return <ProductDetail navigator={navigator} product={route.product} />;
    return <SearchPage navigator={navigator} />;
};

class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator 
                    initialRoute={{ name: 'SEARCH_PAGE' }}
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
        backgroundColor: '#39C728'
    }
});

export default Search;
