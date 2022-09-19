import React from 'react';
import {Provider} from 'react-redux';
// import RootStore from '@/stores';
import Router from '@/router';
import Store from './stores';

const App = () => (
  <Provider store={Store}>
    <Router/>
  </Provider>
)
export default App;
