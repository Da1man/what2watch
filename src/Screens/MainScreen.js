import React from 'react';
import {Text, ScrollView} from 'react-native';
import Header from '../Components/Header';
import ButtonsArea from '../Components/ButtonsArea';
import SettingsSettingsArea from '../Components/SettingsSettingsArea';


const MainScreen = (props) => {
    return (<>
            <Header/>
            <ScrollView>
            <ButtonsArea />
            <SettingsSettingsArea />
            </ScrollView>
        </>
    );
};

export default MainScreen;


