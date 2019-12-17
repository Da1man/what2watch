import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {w} from '../constants';


const ResultItem = (props) => {
    let {id, time, name, genreImage, channelImage} = props;
    return (
        <View style={id % 2 ? styles.containerWhite : styles.containerGray}>
            <View style={styles.itemRow}>
                <View style={styles.itemTimeSection}>
                    <Text style={styles.itemTimeText}>{time}</Text>
                </View>
                <View style={styles.itemNameSection}>
                    <Text style={styles.itemNameText}>{name}</Text>
                </View>
                <View style={styles.itemGenreSection}>
                    <Image style={styles.itemGenreImage} source={genreImage} resizeMode={'contain'}/>
                </View>
                <View style={styles.itemChannelSection}>
                    <Image style={styles.itemChannelImage} source={channelImage} resizeMode={'contain'}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerWhite: {
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor:'#FFFFFF',
    },
    containerGray: {
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor:'#F5F5F5',
    },
    itemRow: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,

    },
    itemTimeSection: {
        width: w * 0.11,
        paddingLeft: 1,
        paddingRight: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTimeText: {
        fontSize: 16,
        fontFamily: 'Russo-One',
        color: '#453201',
    },
    itemNameSection: {
        width: w * 0.61,
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    itemNameText: {
        fontSize: 16,
        fontFamily: 'Russo-One',
        color: '#453201',
    },
    itemGenreSection: {
        width: w * 0.05,
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemChannelSection: {
        width: w * 0.23,
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemGenreImage: {
        height: 16,
    },
    itemChannelImage: {
        height: 16,
    },

});

export default ResultItem;
