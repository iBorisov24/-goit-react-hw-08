import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { loading, error } from '../../redux/selectors';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
const RegisterPage = lazy(() =>
	import('../../Pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('../../Pages/LoginPage/LoginPage'));
export default function App() {
	const dispatch = useDispatch();
	const Loading = useSelector(loading);
	const Error = useSelector(error);
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);
	return (
		<>
			<Navigation />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={''} />
					<Route path="/Register" element={<RegisterPage />} />
					<Route path="/Login" element={<LoginPage />} />
				</Routes>

				{/* <ContactForm />
				<SearchBox />
				<ContactList /> */}
				{Loading && <Loader />}
				{Error && <ErrorMessage />}
			</Suspense>
		</>
	);
}
