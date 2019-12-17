import React from 'react';
import {Text, ScrollView, TouchableOpacity} from 'react-native';
import HeaderResult from '../Components/HeaderResult';
import ResultArea from '../Components/ResultArea';


class ResultScreen extends React.Component {

    componentDidMount() {
    }


    render() {
        return (<>
                <ScrollView>
                    <HeaderResult backFunction={() => this.props.navigation.goBack()}/>
                    <ResultArea/>
                </ScrollView>
            </>
        );
    };
}

export default ResultScreen;


