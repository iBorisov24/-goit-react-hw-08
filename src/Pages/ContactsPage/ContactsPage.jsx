import { useEffect } from 'react';
import { fetchContacts } from '../../redux/Contacts/contactsOps';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import { selectContacts } from '../../redux/Contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function ContactsPage() {
	const dispatch = useDispatch();
	useEffect(dispatch(fetchContacts()), [dispatch]);
	const contacts = useSelector(selectContacts);
	return (
		<>
			<h1>ContactList</h1>
			<ContactForm />
			<SearchBox />
			<ContactList data={contacts} />
		</>
	);
}
