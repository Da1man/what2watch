import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {h, w} from '../constants';


const GanreSettingsButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonSection}>
                <Text style={styles.buttonText}>{props.text}</Text>
                <Image style={styles.buttonImage} source={props.image} resizeMode={'contain'}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: w * 0.29,
        height: 42,
        elevation: 5,
        borderRadius: 5,
    },
    buttonSection: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 12,
        fontFamily: 'Russo-One',
        textTransform: 'lowercase',
        marginRight: 5,
    },
    buttonImage: {
        width: 12,
        height: 12,
    },

});

export default GanreSettingsButton;
