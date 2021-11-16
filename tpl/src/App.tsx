import React from 'react';

import { BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Router from '@/router/';
import {store} from '@/core/';

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <Router/>
        </Provider>
    </BrowserRouter>
)
export default App;
