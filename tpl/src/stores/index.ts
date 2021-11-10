import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import addReducer from '@/stores/Add/Reducer.js';
// import {reducer as testReducer} from '@/Test/Reducer.js';
// import {reducer as delReducer} from '@/Del/Reducer.js';
const reducer = combineReducers({
    addReducer,
    // testReducer,
    // delReducer
    // testList:testReducer,
    // remove:removeReducer,
    // edit:editReducer,
})

function newJson(str){
    var json = (new Function("return " + str))();
    return json;
}
export default createStore(reducer,
    newJson(localStorage.getItem("LJMRoot"))||{},
    applyMiddleware(thunk)
);
