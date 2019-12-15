import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>What 2 Watch</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFD444',
        paddingLeft: 10,
        paddingRight: 10,
    },
    headerSection: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'Russo-One',
    }

});

export default Header;
