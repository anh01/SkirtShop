import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SearchPageItem from './SearchPageItem';

//navigator.push({ name: 'PRODUCT_DETAIL' })

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrSearchItem: [
                { id: 0, name: 'Wool Blend Coat', price: 460, images: ['sp1.jpeg', 'sp2.jpeg', 'sp3.jpeg'], color: 'black' },
                { id: 1, name: 'New Fashion', price: 320, images: ['sp4.jpeg', 'sp5.jpeg'], color: 'blue' }
            ]
        };
    }
    render() {
        const { navigator } = this.props;
        return (
            <ScrollView style={styles.wrapper}>
                {this.state.arrSearchItem.map(e => <SearchPageItem navigator={navigator} product={e} key={e.id} />)}
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
