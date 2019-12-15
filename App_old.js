/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import * as axios from 'axios';
import DOMParser from 'react-native-html-parser';


let state = {
    data: [],
    data2: [],
};


let parseRenTV = () => {
    axios.get('https://tv.mail.ru/moskva/channel/1158/')
        .then(function (response) {
            const html = response.data;
            const parser = new DOMParser.DOMParser();
            const parsed = parser.parseFromString(html, 'text/html');
            console.log(parsed.getElementsByAttribute('title', 'Фильм'));
            const parsedData = parsed.getElementsByAttribute('title', 'Фильм');
            for (let i = 0; i < parsedData.length; i++) {
                state.data.push({
                    name: parsedData[i].previousSibling.firstChild.data,
                    time: parsedData[i].parentNode.attributes._ownerElement.parentNode.parentNode.attributes[2].nodeValue,
                });
                state.data2.push(parsedData[i].parentNode.attributes._ownerElement.parentNode.parentNode.attributes[2].nodeValue + parsedData[i].previousSibling.firstChild.data,
                );
            }
            console.log(state.data);
            alert(state.data2);

        })
        .catch(function (error) {
            console.log(error);
        });
};

let parseSTS = () => {
    axios.get('https://tv.mail.ru/moskva/channel/1112/')
        .then(function (response) {
            const html = response.data;
            const parser = new DOMParser.DOMParser();
            const parsed = parser.parseFromString(html, 'text/html');
            console.log(parsed.getElementsByAttribute('title', 'Фильм'));
            const parsedData = parsed.getElementsByAttribute('title', 'Фильм');
            for (let i = 0; i < parsedData.length; i++) {
                state.data.push({
                    name: parsedData[i].previousSibling.firstChild.data,
                    time: parsedData[i].parentNode.attributes._ownerElement.parentNode.parentNode.attributes[2].nodeValue,
                });
                state.data2.push(parsedData[i].parentNode.attributes._ownerElement.parentNode.parentNode.attributes[2].nodeValue + parsedData[i].previousSibling.firstChild.data,
                );
            }
            console.log(state.data);
            alert(state.data2);

        })
        .catch(function (error) {
            console.log(error);
        });
};

let parseTNT = () => {
    axios.get('https://tv.mail.ru/moskva/channel/751/')
        .then(function (response) {
            const html = response.data;
            const parser = new DOMParser.DOMParser();
            const parsed = parser.parseFromString(html, 'text/html');
            console.log(parsed.getElementsByAttribute('title', 'Фильм'));
            const parsedData = parsed.getElementsByAttribute('title', 'Фильм');
            for (let i = 0; i < parsedData.length; i++) {
                state.data.push({
                    name: parsedData[i].previousSibling.firstChild.data,
                    time: parsedData[i].parentNode.attributes._ownerElement.parentNode.parentNode.attributes[2].nodeValue,
                });
                state.data2.push(parsedData[i].parentNode.attributes._ownerElement.parentNode.parentNode.attributes[2].nodeValue + parsedData[i].previousSibling.firstChild.data,
                );
            }
            console.log(state.data);
            alert(state.data2);

        })
        .catch(function (error) {
            console.log(error);
        });
};

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttonAction} onPress={() => parseRenTV()}>
                            <Text>РЕН-ТВ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAction} onPress={() => parseSTS()}>
                            <Text>СТС</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAction} onPress={() => parseTNT()}>
                            <Text>ТНТ</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonAction: {
        backgroundColor: 'green',
        width: 200,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30,
        borderRadius: 16,
    },
});

export default App;
