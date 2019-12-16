import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FilmButton from './FilmButton';
import {connect} from 'react-redux';
import {
    clearAllSelected,
    selectAllChannels,
    toggleIsSelectedChannel,
} from '../Redux/mainScreenReducer';
import {w} from '../constants';


class ChannelsArea extends React.Component {

    componentDidMount() {
    }

    render() {
        return (<>
                <View style={styles.container}>
                    {
                        this.props.channels.map(channel => <FilmButton key={channel.id}
                                                                       id={channel.id}
                                                                       image={channel.image}
                                                                       isSelected={channel.isSelected}
                                                                       toggleIsSelectedChannel={this.props.toggleIsSelectedChannel}
                        />)
                    }


                </View>
                <View style={styles.buttonSelectContainer}>
                    <TouchableOpacity style={styles.buttonSelectAll} onPress={() => this.props.selectAllChannels()}>
                        <Text style={styles.buttonSelectAllText}>Выбрать все</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSelectClear} onPress={() => this.props.clearAllSelected()}>
                        <Text style={styles.buttonSelectClearText}>Отменить</Text>
                    </TouchableOpacity>
                </View>
            </>

        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFCBA',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    buttonSelectContainer: {
        backgroundColor: '#FFFCBA',
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    buttonSelectAll: {
        width: w * 0.6,
        height: 42,
        backgroundColor: '#FFD444',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    buttonSelectAllText: {
        fontSize: 16,
        fontFamily: 'Russo-One',
        textTransform: 'lowercase',
    },
    buttonSelectClear: {
        width: w * 0.3,
        height: 42,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    buttonSelectClearText: {
        fontSize: 16,
        fontFamily: 'Russo-One',
        textTransform: 'lowercase',
    },

});


let mapStateToProps = (state) => {
    return {
        channels: state.mainScreen.channels,
    };
};

export default connect(mapStateToProps, {
    toggleIsSelectedChannel,
    selectAllChannels,
    clearAllSelected,
})(ChannelsArea);
