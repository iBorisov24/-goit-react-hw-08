import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../Contacts/selectors';
export const selectFilter = state => state.filters.filter;
export const selectFilteredContacts = createSelector(
	[selectContacts, selectFilter],
	(contacts, filter) => {
		const data = filter
			? contacts.filter(item => item.name.toLowerCase().includes(filter))
			: contacts;
		return data;
	}
);
