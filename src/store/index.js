import createSagaMiddelware from 'redux-saga';
import { persistStore } from 'redux-persist';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducers';

const sagaMonitor =
  __DEV__ === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddelware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
