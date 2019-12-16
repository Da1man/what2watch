import React from 'react';
import {Text, ScrollView} from 'react-native';
import Header from '../Components/Header';
import ChannelsArea from '../Components/ChannelsArea';
import SettingsSettingsArea from '../Components/SettingsSettingsArea';


const MainScreen = (props) => {
    return (<>
            <Header/>
            <ScrollView>
                <ChannelsArea/>
                <SettingsSettingsArea toSearchList={()=>props.navigation.navigate('Search')}/>
            </ScrollView>
        </>
    );
};

export default MainScreen;


