import { createSlice } from '@reduxjs/toolkit';
import { register, login, refreshUser, logout } from './operations';
const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: null,
			email: null,
		},
		token: '',
		isLoggedIn: false,
		isRefreshing: false,
		error: null,
		loading: false,
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.loading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(register.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})
			.addCase(login.pending, state => {
				state.loading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(login.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})
			.addCase(logout.fulfilled, state => {
				state.user.email = '';
				state.user.name = '';
				state.isLoggedIn = false;
				state.token = '';
				state.loading = false;
			})
			.addCase(refreshUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			})
			.addCase(refreshUser.rejected, state => {
				state.isRefreshing = false;
			});
	},
});

export const authReducer = authSlice.reducer;
