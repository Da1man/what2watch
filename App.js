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


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import MainScreen from './src/Screens/MainScreen';
import SearchScreen from './src/Screens/SearchScreen';




const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'#FFD444'}/>
            <Provider store={store}>
                    <ScreensApp/>
            </Provider>
            </>
    );
};


const StackNavigator = createStackNavigator({
    Main: {
        screen: MainScreen,
    },
    Search: {
        screen: SearchScreen,
    }
},
    {
        initialRouteName: 'Main',
        headerMode: 'none',
    }
)


const ScreensApp = createAppContainer (StackNavigator);

const styles = StyleSheet.create({
    container: {

        paddingLeft: 10,
        paddingRight: 10,
    },

});

export default App;
