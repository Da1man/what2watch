import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import GanreSettingsButton from './GanreSettingsButton';
import {connect} from 'react-redux';
import {toggleIsSelectedGenre} from '../Redux/mainScreenReducer';
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
                                                                        isSelected={genre.isSelected}
                                                                        toggleIsSelectedGenre={()=>props.toggleIsSelectedGenre(genre.id)}
                        />)
                    }
                </View>

                <View style={styles.searchButtonSection}>
                    <TouchableOpacity style={styles.searchButton} onPress={props.toSearchList}>
                        <Text style={styles.searchButtonText}>ИСКАТЬ</Text>
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
        paddingTop: 90,
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
        marginBottom: 20,
        marginTop: 20,
    },
    searchButton: {
        backgroundColor: '#FFD444',
        width: w * 0.8,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderRadius: 5,
    },
    searchButtonText: {
        fontSize: 24,
        fontFamily: 'Russo-One',
        textTransform: 'uppercase',
    },

});

let mapStateToProps = (state) => {
    return {
        genres: state.mainScreen.genres,
    };
};

export default connect(mapStateToProps, {
    toggleIsSelectedGenre,
})(SettingsSettingsArea);

