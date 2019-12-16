import React from 'react';
import {Text, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../Components/Header';
import ChannelsArea from '../Components/ChannelsArea';
import SettingsSettingsArea from '../Components/SettingsSettingsArea';
import HeaderSearch from '../Components/HeaderSearch';


const SearchScreen = (props) => {
    return (<>
            <HeaderSearch backFunction={()=>props.navigation.goBack()} />
            <TouchableOpacity >
        <Text>SearchScreen</Text>
            </TouchableOpacity>
        </>
    );
};

export default SearchScreen;


