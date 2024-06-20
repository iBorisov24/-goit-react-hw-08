import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/slice';
import { authReducer } from './auth/slice';
import { filterReducer } from './filters/slice';

import storage from 'redux-persist/lib/storage';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

const AuthPersistConfig = {
	key: 'token',
	storage,
	whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(AuthPersistConfig, authReducer);

export const store = configureStore({
	reducer: {
		contacts: contactReducer,
		filters: filterReducer,
		auth: persistedAuthReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export const persistor = persistStore(store);
