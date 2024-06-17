import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
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
			toast.error('Something went wrong :( Try again later.');
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	try {
		const response = await axios.post('/users/login', user);
		setAuthHeader(response.data.token);
		return response.data;
	} catch (e) {
		toast.error('Something went wrong :( Try again later.');
		return thunkAPI.rejectWithValue(e.message);
	}
});
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	await axios.post('/users/logout');

	clearAuthHeader();
});
export const refreshUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI) => {
		const reduxState = thunkAPI.getState();
		if (reduxState.auth.token !== '') {
			setAuthHeader(reduxState.auth.token);
			const response = await axios.get('/users/current');
			return response.data;
		} else {
			return thunkAPI.rejectWithValue('Unable to fetch user');
		}
	}
);
