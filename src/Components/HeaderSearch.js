import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Logo  from '../assets/images/arrow-left-solid.svg'


const HeaderSearch = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <TouchableOpacity style={styles.headerBackSection} onPress={props.backFunction}>
                    <Logo width={40} height={40} />
                </TouchableOpacity>
                <View style={styles.headerTitleSection}>
                    <Text style={styles.headerText}>Результаты поиска</Text>
                </View>
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerBackSection: {
        width: '10%',
        height: '100%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitleSection: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'Russo-One',
    },

});

export default HeaderSearch;
