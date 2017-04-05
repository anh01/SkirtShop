import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions,TouchableOpacity } from 'react-native';
import map from '../../../../media/appIcon/map.png';
import profileImage from '../../../../media/appIcon/teller.png';

class Contact extends Component {
    render() {
        const { 
            mapStyle, mapContainer, wrapper, infoContainer, 
            addressStyle, contactHover, profileStyle, addressContainer,
        } = styles;
        return (
            <View style={wrapper}>
                <View style={mapContainer}>
                    <Image source={map} style={mapStyle} />
                </View>
                <View style={infoContainer}>
                    <View style={addressContainer}>
                        <Text style={addressStyle}>Adress: 90 Le Thi Rieng, Ben Thanh</Text>
                    </View>
                    <View style={contactHover}>
                        <View>
                            <Text>(+84) 1694472176</Text>
                            <Text>Home phone</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: { width: width - 40, height: 230, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' },
    mapContainer: { 
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10, 
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    addressContainer: {
        flex: 1
    },
    addressStyle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#39B38F'
    },
    contactHover: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#39B38F'
    },
    imageContainer: {
        width: 100,
        height: 100,
    },
    profileStyle: {
        width: 70,
        height: 70,
        borderRadius: 35
    }
});

export default Contact;
