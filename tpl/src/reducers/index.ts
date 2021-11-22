import { combineReducers } from 'redux';
import add from './addPageReducer';

const rootReducer = combineReducers({
    add,
    // testReducer,
    // delReducer
    // testList:testReducer,
    // remove:removeReducer,
    // edit:editReducer,
})
export default rootReducer;
