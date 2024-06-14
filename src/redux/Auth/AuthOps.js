import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
	'auth/register',
	async (newUser, thunkAPI) => {
		try {
			const response = await axios.post('/users/signup', newUser);
			setAuthHeader(response.data.token);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	try {
		const response = await axios.post('/users/login', user);
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});
export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
	clearAuthHeader();
	const response = await axios.post('​/users​/logout');
	return response.data;
});
export const refreshUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI) => {
		const reduxState = thunkAPI.getState();
		setAuthHeader(reduxState.auth.token);
		const response = await axios.get('/users/current');
		return response.data;
	}
);
