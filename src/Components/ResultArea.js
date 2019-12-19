import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ResultItem from './ResultIrem';
import {connect} from 'react-redux';
import * as axios from 'axios';
import DOMParser from 'react-native-html-parser';

let parseTnt = () => {
    axios.get('https://tvset.tut.by/268/')
        .then(function (response) {
            const html = response.data;
            const parser = new DOMParser.DOMParser();
            const parsed = parser.parseFromString(html, 'text/html');
            console.log(parsed.getElementsByAttribute('title', 'Фильм'));
            // const parsedData = parsed.getElementsByAttribute('title', 'Фильм');
            // for (let i = 0; i < parsedData.length; i++) {
            //     state.data.push({
            //         name: parsedData[i].previousSibling.firstChild.data,
            //         time: parsedData[i].parentNode.attributes._ownerElement.parentNode.parentNode.attributes[2].nodeValue,
            //     });
            //     state.data2.push(parsedData[i].parentNode.attributes._ownerElement.parentNode.parentNode.attributes[2].nodeValue + parsedData[i].previousSibling.firstChild.data,
            //     );
            // }
            // console.log(state.data);
            // alert(state.data2);

        })
        .catch(function (error) {
            console.log(error);
        });
};


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
            <TouchableOpacity onPress={() => parseTnt()}>
                <Text>Fetch Data</Text>
            </TouchableOpacity>
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

