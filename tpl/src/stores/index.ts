import { createStore , applyMiddleware } from 'redux';

import rootEpic from '@/epics';
import rootReducer from '@/reducers';

// import { merge } from 'lodash';

import { createEpicMiddleware } from 'redux-observable';


const configureStore = (preStore)=> {
    const epicMiddleware = createEpicMiddleware();
    const store = createStore(
        rootReducer,
        preStore,
        applyMiddleware(epicMiddleware)
    );
    epicMiddleware.run(rootEpic);
    return store;
}
let store = configureStore();
const getStore = (preStore?) =>{
    store = configureStore(store.getState());
    // store = configureStore(merge(store.getState(),preStore));
    return store;
}

export default getStore;
