import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/index.js';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Game'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);
  return {store, persistor};
};
