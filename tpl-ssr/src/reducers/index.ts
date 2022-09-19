import { combineReducers } from 'redux';
import addReducer from './addPageReducer';

const rootReducer = combineReducers({
    addReducer,
})
export default rootReducer;
