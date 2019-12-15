import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import GanreSettingsButton from './GanreSettingsButton';
import {connect} from 'react-redux';
import {toggleIsSelected} from '../Redux/mainScreenReducer';
import {w} from '../constants';

const SettingsSettingsArea = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerInner}>
                <View style={styles.titleSection}>
                    <Text style={styles.searchTitleText}>Искать:</Text>
                </View>
                <View style={styles.genreSection}>
                    {
                        props.genres.map( genre => <GanreSettingsButton key={genre.id}
                                                                        text={genre.name}
                                                                        image={genre.image}
                        />)
                    }
                </View>

                <View style={styles.searchButtonSection}>
                    <TouchableOpacity style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Поиск</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.clearButtonSection}>
                    <TouchableOpacity style={styles.clearButton}>
                        <Text style={styles.clearButtonText}>сброс выбранных каналов</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFCBA',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 110,
        paddingBottom: 130,
    },
    containerInner: {

    },
    titleSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchTitleText: {
        fontSize: 16,
        fontFamily: 'Russo-One',
        textTransform: 'uppercase',
    },
    genreSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    searchButtonSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchButton: {
        backgroundColor: '#FFD444',
        width: w * 0.62,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderRadius: 5,
    },
    searchButtonText: {
        fontSize: 16,
        fontFamily: 'Russo-One',
        textTransform: 'uppercase',
    },
    clearButtonSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    clearButton: {
        backgroundColor: '#E25757',
        width: w * 0.93,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderRadius: 5,
    },
    clearButtonText: {
        fontSize: 16,
        fontFamily: 'Russo-One',
        textTransform: 'lowercase',
    },

});

let mapStateToProps = (state) => {
    return {
        genres: state.mainScreen.genres,
    };
};

export default connect(mapStateToProps, {
    toggleIsSelected,
})(SettingsSettingsArea);

