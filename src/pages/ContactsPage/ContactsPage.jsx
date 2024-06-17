import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function ContactsPage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);
	return (
		<>
			{loading && <Loader />}
			{error && <ErrorMessage />}
			<h1>ContactList</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />
		</>
	);
}
