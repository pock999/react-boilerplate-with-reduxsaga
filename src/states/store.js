import { createStore, applyMiddleware } from 'redux';
import rootReducers from './rootReducers';
import createSagaMiddleware from 'redux-saga'

import {rootSagas} from './rootSagas';

const sagaMiddleware = createSagaMiddleware();
export const store  = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);
