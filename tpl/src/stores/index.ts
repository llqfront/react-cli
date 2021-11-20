import { createStore , applyMiddleware } from 'redux';

import rootEpic from '@/epics';
import rootReducer from '@/reducers';

import { createEpicMiddleware } from 'redux-observable';



const configureStore = ()=> {

    const epicMiddleware = createEpicMiddleware();

    const newStore = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    return store;
}

export default configureStore;
