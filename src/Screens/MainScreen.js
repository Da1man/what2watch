import React from 'react';
import {Text, ScrollView} from 'react-native';
import Header from '../Components/Header';
import ChannelsArea from '../Components/ChannelsArea';
import SettingsSettingsArea from '../Components/SettingsSettingsArea';


const MainScreen = (props) => {
    return (<>
            <Header/>
            <ScrollView style={{backgroundColor: '#FFFCBA'}}>
                <ChannelsArea/>
                <SettingsSettingsArea toSearchList={()=>props.navigation.navigate('Result')}/>
            </ScrollView>
        </>
    );
};

export default MainScreen;


