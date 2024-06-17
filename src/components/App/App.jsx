import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import Loader from '../Loader/Loader';

import { refreshUser } from '../../redux/Auth/operations.js';
import { selectIsRefresh } from '../../redux/Auth/selectors';
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';
import Layout from '../Layout/Layout.jsx';

const ContactsPage = lazy(() =>
	import('../../pages/ContactsPage/ContactsPage')
);
const RegisterPage = lazy(() =>
	import('../../pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

export default function App() {
	const dispatch = useDispatch();
	const isRefresh = useSelector(selectIsRefresh);

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);
	{
		return isRefresh ? (
			<Loader />
		) : (
			<>
				<Suspense fallback={<Loader />}>
					<Layout>
						<Toaster />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route
								path="/register"
								element={
									<RestrictedRoute
										Component={<RegisterPage />}
										redirectTo={'/'}
									/>
								}
							/>
							<Route
								path="/login"
								element={
									<RestrictedRoute Component={<LoginPage />} redirectTo={'/'} />
								}
							/>
							<Route
								path="/contacts"
								element={
									<PrivateRoute
										Component={<ContactsPage />}
										redirectTo={'/login'}
									/>
								}
							/>
							<Route path="*" compo />
						</Routes>
					</Layout>
				</Suspense>
			</>
		);
	}
}
