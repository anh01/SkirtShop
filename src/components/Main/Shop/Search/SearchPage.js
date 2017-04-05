import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SearchPageItem from './SearchPageItem';
import sp5 from '../../../../media/temp/sp5.jpeg';

//navigator.push({ name: 'PRODUCT_DETAIL' })

class SearchPage extends Component {
    render() {
        return (
            <ScrollView style={styles.wrapper}>
                <SearchPageItem />
                <SearchPageItem />
                <SearchPageItem />
                <SearchPageItem />
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
