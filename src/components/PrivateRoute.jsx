import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ Component, redirectTo }) {
	const isLogin = useSelector(selectIsLoggedIn);
	return isLogin ? Component : <Navigate to={redirectTo} />;
}
