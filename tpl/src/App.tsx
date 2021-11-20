import React from 'react';

import { BrowserRouter, HashRouter} from 'react-router-dom';

import {Provider} from 'react-redux';


import getStore from '@/stores';
import Router from '@/router';

const App = () => (
    <BrowserRouter>
        <Provider store={getStore()}>
            <Router/>
        </Provider>
    </BrowserRouter>
)
export default App;
