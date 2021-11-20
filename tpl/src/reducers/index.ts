import { combineReducers } from 'redux';
import add from '@/reducers/addPageReducer';

const rootReducer = combineReducers({
    add,
    // testReducer,
    // delReducer
    // testList:testReducer,
    // remove:removeReducer,
    // edit:editReducer,
})

export default rootReducer;
