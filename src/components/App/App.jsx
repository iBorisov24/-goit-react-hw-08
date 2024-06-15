import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import AuthNav from '../AuthNav/AuthNav';

import { selectLoading, selectError } from '../../redux/Contacts/selectors';
import { fetchContacts } from '../../redux/Contacts/contactsOps';
import { refreshUser } from '../../redux/Auth/AuthOps';
import { selectIsRefresh } from '../../redux/Auth/selectors';
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';

const ContactsPage = lazy(() =>
	import('../../Pages/ContactsPage/ContactsPage')
);
const RegisterPage = lazy(() =>
	import('../../Pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('../../Pages/LoginPage/LoginPage'));

const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));

export default function App() {
	const dispatch = useDispatch();
	const Loading = useSelector(selectLoading);
	const Error = useSelector(selectError);
	const isRefresh = useSelector(selectIsRefresh);

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	{
		return isRefresh ? (
			<Loader />
		) : (
			<>
				<AuthNav />
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route
							path="/"
							element={
								<RestrictedRoute component={<HomePage />} redirectTo={'/'} />
							}
						/>
						<Route
							path="/register"
							element={
								<RestrictedRoute
									component={<RegisterPage />}
									redirectTo={'/contacts'}
								/>
							}
						/>
						<Route path="/login" element={<LoginPage />} />
						<Route
							path="/contacts"
							element={
								<PrivateRoute
									component={<ContactList />}
									redirectTo={'/login'}
								/>
							}
						/>
						<Route path="*" />
					</Routes>
					{Loading && <Loader />}
					{Error && <ErrorMessage />}
				</Suspense>
			</>
		);
	}
}
