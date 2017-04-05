import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SearchPageItem from './SearchPageItem';

//navigator.push({ name: 'PRODUCT_DETAIL' })

class SearchPage extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <ScrollView style={styles.wrapper}>
                <SearchPageItem navigator={navigator} />
                <SearchPageItem navigator={navigator} />
                <SearchPageItem navigator={navigator} />
                <SearchPageItem navigator={navigator} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F6F6F6',
        flex: 1
    }
});

export default SearchPage;
