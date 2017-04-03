import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Navigator, 
    TouchableOpacity, StatusBar 
} from 'react-native';

StatusBar.setHidden(true);

const Main = (props) => (
   <View style={styles.main}>
        <Text>Main Component</Text>
        <TouchableOpacity onPress={() => props.navigator.push({ name: 'AUTH' })}>
            <Text>Go to Login Component</Text>
        </TouchableOpacity>
   </View> 
);

const Authentication = (props) => (
   <View style={styles.auth}>
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
            <View style={styles.container}>
                <Navigator 
                    initialRoute={{ name: 'MAIN' }}
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
    },
    main: {
        flex: 1,
        backgroundColor: '#DFF5C9'
    },
    auth: {
        flex: 1,
        backgroundColor: '#C1C1C1'
    }
});
