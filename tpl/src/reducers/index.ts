import { combineReducers } from 'redux';
import addReducer from './addPageReducer';
import oldReducer from './oldPageReducer';

const rootReducer = combineReducers({
    addReducer,
    oldReducer
})
export default rootReducer;
