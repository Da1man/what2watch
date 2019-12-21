import React from 'react';
import {Text, ScrollView, TouchableOpacity} from 'react-native';
import HeaderResult from '../Components/HeaderResult';
import ResultArea from '../Components/ResultArea';
import {connect} from 'react-redux';
import {clearResults, setParsedData} from '../Redux/resultScreenReducer';
import * as axios from 'axios';
import DOMParser from 'react-native-html-parser';

class ResultScreen extends React.Component {

    componentDidMount() {
        this.props.clearResults();
        let settedGanres = [];
        this.props.genres.map(genre => {
            if (genre.isSelected) {
                settedGanres.push(genre.parsePhrase);
            }
        });
        this.props.channels.map(channel => {
            if (channel.isSelected) {
                setTimeout( () => {
                    console.log('Request sent to channel', channel.name);
                    this.parseChannel(channel.name, channel.parseUrl, settedGanres, this.props.setParsedData);
                }, 2000)
            }
        });


    }

    parseChannel = (channelName, channelUrl, genres, setData) => {
        for (let g = 0; g < genres.length; g++) {
            setTimeout(() =>{
                console.log('Request sent for genre', genres[g])
                axios.get(channelUrl)
                    .then(function (response) {
                        const html = response.data;
                        const parser = new DOMParser.DOMParser();
                        const parsed = parser.parseFromString(html, 'text/html');
                        const parsedData = parsed.getElementsByAttribute('title', genres[g]);
                        for (let i = 0; i < parsedData.length; i++) {
                            setData({
                                name: parsedData[i].previousSibling.firstChild.data,
                                time: parsedData[i].parentNode.attributes._ownerElement.parentNode.parentNode.attributes[2].nodeValue,
                                genre: genres[g],
                                channel: channelName,
                            });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }, 2000);

        }
    };


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

let mapStateToProps = (state) => {
    return {
        channels: state.mainScreen.channels,
        genres: state.mainScreen.genres,
    };
};

export default connect(mapStateToProps, {
    setParsedData,
    clearResults,

})(ResultScreen);



