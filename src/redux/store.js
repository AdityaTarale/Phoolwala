import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

/* Redux-Saga */

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

/* Redux-Persist */

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* ---- Redux Store Configuration ---- */

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(middleware)
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };
