import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ListItem from './ListItem';
import sp1 from '../../../../media/appIcon/backList.png';

//navigator.push({ name: 'PRODUCT_DETAIL' })

class ListProduct extends Component {
    render() {
        const { navigator } = this.props;
        const { wrapper } = styles;
        return (
                <ScrollView style={wrapper}>
                    <View 
                        style={{ height: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                    >   
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigator.pop()}>
                            <Image source={sp1} style={{ width: 30, height: 30, marginLeft: 10 }} />
                        </TouchableOpacity>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Avenir', fontSize: 20, margin: 20, color: '#C21C70' }}>MIDI DRESS</Text>
                        </View>
                        <View style={{ flex: 1 }}>

                        </View>
                    </View>
                    <ListItem navigator={navigator} />
                    <ListItem navigator={navigator} />
                    <ListItem navigator={navigator} />
                    <ListItem navigator={navigator} />
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        marginBottom: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    }
});

export default ListProduct;
