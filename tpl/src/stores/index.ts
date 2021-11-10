import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as addReducer} from '@/views/Action/_index.js';
// import {reducer as testReducer} from '../views/Test/_index.js';
// import {reducer as delReducer} from '../views/Test/_index.js';
const reducer = combineReducers({
    add:addReducer,
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
