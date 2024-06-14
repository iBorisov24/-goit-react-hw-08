import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';
import { addContact } from './contactsOps';
import { deleteContact } from './contactsOps';

const contactSlice = createSlice({
	name: 'contacts',
	initialState: {
		contacts: {
			items: [],
			loading: false,
			error: null,
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.pending, (state, action) => {
				state.contacts.loading = true;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.contacts.loading = false;
				state.contacts.error = null;
				state.contacts.items = action.payload;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.contacts.loading = false;
				state.contacts.error = action.payload;
			})

			.addCase(addContact.pending, (state, action) => {
				state.contacts.loading = true;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.contacts.loading = false;
				state.contacts.error = null;
				state.contacts.items.push(action.payload);
			})
			.addCase(addContact.rejected, (state, action) => {
				state.contacts.loading = false;
				state.contacts.error = true;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.contacts.items = state.contacts.items.filter(
					item => item.id !== action.payload.id
				);
				state.contacts.loading = false;
			});
	},
});

export const contactReducer = contactSlice.reducer;
