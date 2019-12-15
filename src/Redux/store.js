import {combineReducers, createStore} from 'redux';
import mainScreenReduser from './mainScreenReducer';


let rootReducer = combineReducers ( {
    mainScreen: mainScreenReduser,
});
let store = createStore (rootReducer);

export default store;
