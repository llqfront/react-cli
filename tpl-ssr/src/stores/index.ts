import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '@/reducers';

const newJson = (str:any) => {
  let json = (new Function("return " + str))();
  return json;
}

let prevStore = newJson(localStorage.getItem("LJMRoot")) || {};

const Store = createStore(
    rootReducer,
    prevStore,
    applyMiddleware(thunk)
);
Store.subscribe(() =>{
  // console.log(Store.getState())
  localStorage.setItem("LJMRoot", JSON.stringify(Store.getState()));
})
export default Store;
