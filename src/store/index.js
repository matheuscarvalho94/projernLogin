import { createStore, applyMiddleware, compose } from 'redux';
import { middleware as navMiddleware } from '../navigation/index';
import createSagaMiddleware from 'redux-saga';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [
  navMiddleware,
  sagaMiddleware,
];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore(reducers,  compose(
  applyMiddleware(...middleware),
  offline(offlineConfig),
));

sagaMiddleware.run(sagas);

export default store;
