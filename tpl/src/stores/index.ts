import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '@/reducers';

const configureStore = (prevStore)=> {
    const store = createStore(
        rootReducer,
        prevStore,
        applyMiddleware(thunk)
    );
    return store;
}
let store = configureStore();

const RootStore = (prevStore?) =>{
    store = configureStore(prevStore);
    return store;
}

export default RootStore;
