import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FilmButton from './FilmButton';
import {connect} from 'react-redux';
import {toggleIsSelected} from '../Redux/mainScreenReducer';


class ButtonsArea extends React.Component {

    componentDidMount() {
        }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.channels.map(channel => <FilmButton key={channel.id}
                                                                   id={channel.id}
                                                                   image={channel.image}
                                                                   isSelected={channel.isSelected}
                                                                   toggleIsSelected={this.props.toggleIsSelected}
                    />)
                }


            </View>
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
        justifyContent: 'space-between'

    },
});


let mapStateToProps = (state) => {
    return {
        channels: state.mainScreen.channels,
    };
};

export default connect(mapStateToProps, {
    toggleIsSelected,
})(ButtonsArea);
