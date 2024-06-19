import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({ Component, redirectTo }) {
	const isLogin = useSelector(selectIsLoggedIn);
	return isLogin ? <Navigate to={redirectTo} /> : Component;
}
