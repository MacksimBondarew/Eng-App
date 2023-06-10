import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { stateReducer } from './words';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const wordsPersist = {
    key: 'auth',
    storage,
    whitelist: ['words'],
};

export const store = configureStore({
    reducer: {
        words: persistReducer(wordsPersist, stateReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
