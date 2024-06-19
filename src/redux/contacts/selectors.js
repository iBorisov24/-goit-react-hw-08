import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
	[selectContacts, selectFilter],
	(contacts, filter) => {
		const data = filter
			? contacts.filter(
					item =>
						item.name.toLowerCase().includes(filter) ||
						item.number.includes(filter)
			  )
			: contacts;
		return data;
	}
);
