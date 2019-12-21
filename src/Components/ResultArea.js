import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ResultItem from './ResultIrem';
import {connect} from 'react-redux';


const ResultArea = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerInner}>
                {props.result.map(item => {
                    return <ResultItem
                        {...item} key={item.id}
                    />
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFCBA',
        paddingTop: 10,
        paddingBottom: 10,
    },
    containerInner: {

    }


});

let mapStateToProps = (state) => {
    return {
        result: state.resultScreen.result,
    };
};

export default connect(mapStateToProps, {

})(ResultArea);

