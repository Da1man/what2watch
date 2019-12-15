import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/Redux/store';

import MainScreen from './src/Screens/MainScreen';


const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'#FFD444'}/>
            <Provider store={store}>
                <SafeAreaView >
                    <MainScreen/>
                </SafeAreaView>
            </Provider>
        </>
    );
};

const styles = StyleSheet.create({
    container: {

        paddingLeft: 10,
        paddingRight: 10,
    },

});

export default App;
