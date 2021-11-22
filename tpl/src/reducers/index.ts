import { combineReducers } from 'redux';
import addReducer from './addPageReducer';
import oldReducer from './oldPageReducer';
import ajaxReducer from './ajaxPageReducer';

const rootReducer = combineReducers({
    addReducer,
    oldReducer,
    ajaxReducer
})
export default rootReducer;
