import React, { Component } from 'react';
import { 
    ScrollView, StyleSheet, TouchableOpacity 
} from 'react-native';
import Card from './Card';
import ListCategory from './ListCategory';
import ListProductHome from './ListProductHome';

export default class HomePage extends Component {
    render() {
        const { homepage } = styles;
        const { navigator } = this.props;
        return (
            <ScrollView style={homepage}>
                <TouchableOpacity>
                    <Card />
                </TouchableOpacity>
                <ListCategory navigator={navigator} />
                <ListProductHome navigator={navigator} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    homepage: {
        backgroundColor: '#E3E2E0',
        flex: 1
    }
});

/*
<View style={styles.homepage}>
    <Text>Home page</Text>
    <TouchableOpacity onPress={() => navigator.push({ name: 'PRODUCT_DETAIL' })}>
        <Text>See product detail</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigator.push({ name: 'LIST_PRODUCT' })}>
        <Text>See List products</Text>
    </TouchableOpacity>
</View>
*/