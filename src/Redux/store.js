import {combineReducers, createStore} from 'redux';
import mainScreenReduser from './mainScreenReducer';
import resultScreenReduser from './resultScreenReducer';


let rootReducer = combineReducers ( {
    mainScreen: mainScreenReduser,
    resultScreen: resultScreenReduser,
});
let store = createStore (rootReducer);

export default store;
