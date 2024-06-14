import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './Contacts/contactsSlice';
import { filterReducer } from './Filters/filtersSlice';
import { authReducer } from './Auth/AuthSlice';
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
