import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer'; // must be updated to use combineReducers if needed

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user'] // add the slices you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default { store, persistor };
