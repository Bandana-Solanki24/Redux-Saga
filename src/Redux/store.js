import {configureStore} from '@reduxjs/toolkit';
import reduxSaga from './reduxSaga';
import rootReducer from './rootReducer';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware=createSagaMiddleware();

const store=configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(reduxSaga);
export default store;
