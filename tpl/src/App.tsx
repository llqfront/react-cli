import React from 'react';
import { Provider } from 'mobx-react';
import { observable, useStrict ,autorun,spy} from 'mobx';
import { BrowserRouter, HashRouter} from 'react-router-dom';
// const cnstore = new cnStore();
import Router from '@/router/';
import firstStore from '@/store/index.js';
import testStore from '@/store/first.js';
// const cnstore = new cnStore();
const stores = {
  first: new firstStore(),
  test: new testStore(),
  // ...other stores
};
spy((event) => {
    if (event.type === 'action') {
        console.log(stores)
    }
})
const App = () => (
    <BrowserRouter>
        <Provider {...stores}>
            <Router/>
        </Provider>
    </BrowserRouter>
)
export default App;
