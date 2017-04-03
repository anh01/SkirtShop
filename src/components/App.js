import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity } from 'react-native';

const Main = (props) => (
   <View>
        <Text>Main Component</Text>
        <TouchableOpacity onPress={() => props.navigator.push({ name: 'AUTH' })}>
            <Text>Go to Login Component</Text>
        </TouchableOpacity>
   </View> 
);

const Authentication = (props) => (
   <View>
        <Text>Athentication Component</Text>
        <TouchableOpacity onPress={() => props.navigator.pop()}>
            <Text>Go back to Login Component</Text>
        </TouchableOpacity>
   </View> 
);

const renderScene = (route, navigator) => {
    if (route.name === 'MAIN') return <Main navigator={navigator} />;
    return <Authentication navigator={navigator} />;
};

export default class App extends Component {
    render() {
        return (
            <Navigator 
                initialRoute={{ name: 'MAIN' }}
                renderScene={renderScene}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
