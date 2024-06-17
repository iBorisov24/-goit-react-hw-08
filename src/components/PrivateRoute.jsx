import { useSelector } from 'react-redux';
import { selectIsLoggin } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ Component, redirectTo }) {
	const isLogin = useSelector(selectIsLoggin);
	return isLogin ? Component : <Navigate to={redirectTo} />;
}
