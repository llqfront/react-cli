import React from 'react';

import { BrowserRouter, HashRouter} from 'react-router-dom';

import {Provider} from 'react-redux';


import RootStore from '@/stores';
import Router from '@/router';

const App = () => (
    <BrowserRouter>
        <Provider store={RootStore}>
            <Router/>
        </Provider>
    </BrowserRouter>
)
export default App;
