import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {h, w} from '../constants';


const FilmButton = (props) => {
    return (
        <View style={props.isSelected ? styles.containerActive : styles.container}>
            <TouchableOpacity style={styles.buttonSection} onPress={() => props.toggleIsSelected(props.id)}>
                <Image style={styles.buttonImage} source={props.image} resizeMode={'contain'}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: w * 0.46,
        height: 57,
        marginBottom: 10,
        elevation: 5,
        borderRadius: 5,
    },
    containerActive: {
        backgroundColor: 'white',
        width: w * 0.46,
        height: 57,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#FFA800',
    },
    buttonSection: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImage: {
        height: 34,
    },
});

export default FilmButton;
