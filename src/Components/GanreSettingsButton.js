import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {h, w} from '../constants';


const GanreSettingsButton = (props) => {
    return (
        <View style={ props.isSelected ? styles.containerActive : styles.container}>
            <TouchableOpacity style={styles.buttonSection} onPress={props.toggleIsSelectedGenre}>
                <Text style={styles.buttonText}>{props.text}</Text>
                <Image style={styles.buttonImage} source={props.image} resizeMode={'contain'}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: w * 0.45,
        height: 42,
        elevation: 5,
        borderRadius: 5,
    },
    containerActive: {
        backgroundColor: 'white',
        width: w * 0.45,
        height: 42,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#FFA800',
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
