import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BackArrow  from '../assets/images/back-arrow.svg'



const HeaderResult = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <TouchableOpacity style={styles.headerBackSection} onPress={props.backFunction}>
                    <BackArrow width={21} height={21} />
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
        color: '#453201',
    },

});

export default HeaderResult;
