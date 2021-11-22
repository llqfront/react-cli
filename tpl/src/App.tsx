import React from 'react';

import { BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import RootStore from '@/stores';
import Router from '@/router';

const unsubscribe = RootStore().subscribe(() =>{
  // console.log(Store.getState())
  localStorage.setItem("LJMRoot", JSON.stringify(RootStore().getState()));
})
//
function newJson(str){
    var json = (new Function("return " + str))();
    return json;
}
let prevStore = newJson(localStorage.getItem("LJMRoot"))||{};
const App = () => (
    <BrowserRouter>
        <Provider store={RootStore(prevStore)}>
            <Router/>
        </Provider>
    </BrowserRouter>
)
export default App;
