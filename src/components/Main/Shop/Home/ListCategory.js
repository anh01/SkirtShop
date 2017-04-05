import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const midiIcon = require('../../../../media/temp/midi.jpg');
const fitIcon = require('../../../../media/temp/fit.jpg');
const littleIcon = require('../../../../media/temp/little.jpg');
const maxiIcon = require('../../../../media/temp/maxi.jpg');
const miniIcon = require('../../../../media/temp/mini.jpg');
const partyIcon = require('../../../../media/temp/party.jpg');

export default class ListCategory extends Component {
  goToListProduct(idList) {
    //This navigator is start ad ./Home/index.js
    const { navigator } = this.props;
    navigator.push({ name: 'LIST_PRODUCT', idList });
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>LIST OF CATEGORY</Text>
        </View>
        <View style={styles.body}>
          <Swiper
            height={width / 2.5}
            width={width - 40}
          >
            <TouchableOpacity onPress={() => this.goToListProduct.bind(this)(0)}>
              <Image style={styles.image} source={midiIcon}>
                <Text style={styles.textStyle}>Midi Dress</Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToListProduct.bind(this)(1)}>
              <Image style={styles.image} source={littleIcon}>
                <Text style={styles.textStyle}>Little Dress</Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToListProduct.bind(this)(2)}>
              <Image style={styles.image} source={fitIcon}>
                <Text style={styles.textStyle}>Fit Dress</Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToListProduct.bind(this)(3)}>
              <Image style={styles.image} source={miniIcon}>
                <Text style={styles.textStyle}>Mini Dress</Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToListProduct.bind(this)(4)}>
              <Image style={styles.image} source={partyIcon}>
                <Text style={styles.textStyle}>Party Dress</Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToListProduct.bind(this)(5)}>
              <Image style={styles.image} source={maxiIcon}>
                <Text style={styles.textStyle}>Maxi Dress</Text>
              </Image>
            </TouchableOpacity>
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: width - 20,
    margin: 10,
    marginTop: 0,
    padding: 10,
    paddingTop: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#292929',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3
  },
  body: {
    alignItems: 'center'
  },
  image: {
    width: width - 40,
    height: (width - 40) / 2,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  title: {
    marginVertical: 15,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 20,
    opacity: 0.5,
    fontFamily: 'Avenir'
  }
});
