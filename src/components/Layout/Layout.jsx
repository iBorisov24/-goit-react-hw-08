import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar.jsx';
import Loader from '../../components/Loader/Loader.jsx';

export default function Layout({ children }) {
	return (
		<div>
			<AppBar />
			<Suspense fallback={<Loader />}>{children}</Suspense>
		</div>
	);
}
