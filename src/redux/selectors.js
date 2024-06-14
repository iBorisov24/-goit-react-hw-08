import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
export const error = state => state.contacts.contacts.error;
export const loading = state => state.contacts.contacts.loading;
export const selectFilter = state => state.filters.filter;
export const getContacts = state => state.contacts.contacts.items;

export const selectContacts = createSelector(
	[getContacts, selectFilter],
	(contacts, filter) => {
		const data = filter
			? contacts.filter(item => item.name.toLowerCase().includes(filter))
			: contacts;
		return data;
	}
);
