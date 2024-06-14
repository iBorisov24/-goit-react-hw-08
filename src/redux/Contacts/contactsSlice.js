import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';
import { addContact } from './contactsOps';
import { deleteContact } from './contactsOps';

const contactSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})

			.addCase(addContact.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.items.push(action.payload);
			})
			.addCase(addContact.rejected, (state, action) => {
				state.loading = false;
				state.error = true;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.items = state.items.filter(item => item.id !== action.payload.id);
				state.loading = false;
			});
	},
});

export const contactReducer = contactSlice.reducer;
