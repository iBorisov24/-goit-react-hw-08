import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
	name: 'filters',
	initialState: {
		filter: '',
	},
	reducers: {
		filterContacts(state, action) {
			state.filter = action.payload;
		},
	},
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
